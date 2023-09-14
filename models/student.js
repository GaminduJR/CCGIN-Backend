const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    ID:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    contactNum:{
        type:String,
        unique:true,
        required:true
    }
    
});

module.exports = mongoose.model('student', studentSchema);