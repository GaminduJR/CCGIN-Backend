const express = require('express');
const Books = require('../models/book');

const router = express.Router();

//Save books
router.post('/book/save', async (req, res) => {
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


//retrieve book
router.get('/book/view', async (req, res) => {
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


//get a specific Plan
router.get("/book/:id", async (req, res) => {
    let bookID = req.params.id;
    try {
      const book = await Books.findById(bookID).exec();
      return res.status(200).json({
        success: true,
        book,
      });
      console.log(book);
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  });
  

//update book

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