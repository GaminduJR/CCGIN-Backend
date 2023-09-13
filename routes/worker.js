const express = require('express');
const Workers = require('../models/worker');

const router = express.Router();

//Save books

router.post('/worker/save', async (req, res) => {
    try {
        const newWorker = new Workers(req.body);
        await newWorker.save();
        return res.status(200).json({
            success: "Worker saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});

//get book

// router.get('/book',(req,res)=>{
//     Books.find().exec((err,book)=>{
//         if(err){
//             return res.status(400).json({
//                 erro:err
//             })
//         }

//         return res.status(200).json({
//             success:true,
//             existingBooks:book
//         });
//     });
// });

router.get('/worker', async (req, res) => {
    try {
        const workers = await Workers.find().exec();
        return res.status(200).json({
            success: true,
            existingWorkers: workers
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


//update book

// router.put('/book/update/:id',(req,res)=>{
//     Books.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,book)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"Update Succesfully"
//             })
//         }
//     );
// });

router.put('/worker/update/:id', async (req, res) => {
    try {
        const worker = await Workers.findByIdAndUpdate(req.params.id, { $set: req.body }).exec();

        if (!worker) {
            return res.status(404).json({ error: 'Worker not found' });
        }

        return res.status(200).json({
            success: 'Update Successfully'
        });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
});


//Delete book

// router.delete('/book/delete/:id',(req,res)=>{
//     Books.findByIdAndRemove(req.params.id).exec((err,deletedBook)=>{

//         if(err) return res.status(400).json({
//             message:"Delete unsuccesful",error
//     });

//         return res.json({
//             message:"Delete Succesful",deletedBook
//         });
//     });
// });

router.delete('/worker/delete/:id', async (req, res) => {
    try {
        const deletedWorker = await Workers.findByIdAndRemove(req.params.id).exec();

        if (!deletedWorker) {
            return res.status(404).json({ message: 'Worker not found' });
        }

        return res.json({ message: 'Delete Successful', deletedWorker });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});


module.exports = router;