const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    bookName:{
        type:String,
        required:true
    },
    ISBN:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    bookCategory:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Books', bookSchema);