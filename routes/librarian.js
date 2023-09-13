const express = require('express');
const Librarians = require('../models/librarian');

const router = express.Router();

//Save librarian

router.post('/librarian/save', async (req, res) => {
    try {
        const newBook = new Books(req.body);
        await newBook.save();
        return res.status(200).json({
            success: "Librarian saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});

//retrieve librarian
router.get('/librarian', async (req, res) => {
    try {
        const librarians = await Librarians.find().exec();
        return res.status(200).json({
            success: true,
            existingLibrarians: librarians
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


//update librarian

router.put('/librarian/update/:id', async (req, res) => {
    try {
        const librarian = await Librarians.findByIdAndUpdate(req.params.id, { $set: req.body }).exec();

        if (!librarian) {
            return res.status(404).json({ error: 'Librarian not found' });
        }

        return res.status(200).json({
            success: 'Update Successfully'
        });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
});


//Delete librarian

router.delete('/librarian/delete/:id', async (req, res) => {
    try {
        const deletedLibrarian = await Librarians.findByIdAndRemove(req.params.id).exec();

        if (!deletedLibrarian) {
            return res.status(404).json({ message: 'Librarian not found' });
        }

        return res.json({ message: 'Delete Successful', deletedBook });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});


module.exports = router;