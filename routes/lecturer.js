const express = require('express');
const Lecturer = require('../models/lecturer');

const router = express.Router();


//Save posts

router.post('/lecturer/save', async (req, res) => {
    try {
        const newLecturer = new Lecturer(req.body);
        await newLecturer.save();
        return res.status(200).json({
            success: "Lecturer saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


//get post

router.get('/lecturer', async (req, res) => {
    try {
        const lecturer = await Lecturer.find().exec();
        return res.status(200).json({
            success: true,
            existingLecturer: lecturer
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


//update post

router.put('/lecturer/update/:id', async (req, res) => {
    try {
        const lecturer = await Lecturer.findByIdAndUpdate(req.params.id, { $set: req.body }).exec();

        if (!lecturer) {
            return res.status(404).json({ error: 'Lecturer not found' });
        }

        return res.status(200).json({
            success: 'Update Successfully'
        });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
});


//Delete post

router.delete('/lecturer/delete/:id', async (req, res) => {
    try {
        const deletedLecturer = await Lecturer.findByIdAndRemove(req.params.id).exec();

        if (!deletedLecturer) {
            return res.status(404).json({ message: 'Lecturer not found' });
        }

        return res.json({ message: 'Delete Successful', deletedLecturer });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});


module.exports = router;