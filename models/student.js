const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    ID:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNum:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('student', studentSchema);