const express = require('express');
const Student = require('../models/student');

const router = express.Router();


//Save posts

router.post('/student/save', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        return res.status(200).json({
            success: "Student saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


//get post

router.get('/student/view', async (req, res) => {
    try {
        const student = await Student.find().exec();
        return res.status(200).json({
            success: true,
            existingStudent: student
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


//update post

router.put('/student/update/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }).exec();

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        return res.status(200).json({
            success: 'Update Successfully'
        });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
});


//Delete post

router.delete('/student/delete/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndRemove(req.params.id).exec();

        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        return res.json({ message: 'Delete Successful', deletedStudent });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});


module.exports = router;