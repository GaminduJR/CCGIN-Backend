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

//get worker

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


//update worker

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


//Delete worker
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