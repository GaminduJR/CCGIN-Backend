const express = require('express');
const Books = require('../models/book');

const router = express.Router();

//Save books

router.post('/save', async (req, res) => {
    try {
        const newBook = new Books(req.body);
        await newBook.save();
        return res.status(200).json({
            success: "Books saved successfully"
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

router.get('/book', async (req, res) => {
    try {
        const books = await Books.find().exec();
        return res.status(200).json({
            success: true,
            existingBooks: books
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

router.put('/book/update/:id', async (req, res) => {
    try {
        const book = await Books.findByIdAndUpdate(req.params.id, { $set: req.body }).exec();

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
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

router.delete('/book/delete/:id', async (req, res) => {
    try {
        const deletedBook = await Books.findByIdAndRemove(req.params.id).exec();

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.json({ message: 'Delete Successful', deletedBook });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});


module.exports = router;