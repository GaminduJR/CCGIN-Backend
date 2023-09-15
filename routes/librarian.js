const express = require('express');
const Librarian = require('../models/librarian');

const router = express.Router();

//Save librarian

router.post('/librarian/save', async (req, res) => {
    try {
        const newLibrarian = new Librarian(req.body);
        await newLibrarian.save();
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
router.get('/librarian/view', async (req, res) => {
    try {
        const librarian = await Librarian.find().exec();
        return res.status(200).json({
            success: true,
            existingLibrarian: librarian
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


//get a specific Plan

router.get("/librarian/:id", async (req, res) => {
    let librarianID = req.params.id;
    try {
      const librarian = await Librarian.findById(librarianID).exec();
      return res.status(200).json({
        success: true,
        librarian,
      });
      console.log(librarian);
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  });
  

//update librarian

router.put('/librarian/update/:id', async (req, res) => {
    try {
        const librarian = await Librarian.findByIdAndUpdate(req.params.id, { $set: req.body }).exec();

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
        const deletedLibrarian = await Librarian.findByIdAndRemove(req.params.id).exec();

        if (!deletedLibrarian) {
            return res.status(404).json({ message: 'Librarian not found' });
        }

        return res.json({ message: 'Delete Successful', deletedLibrarian });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});


module.exports = router;