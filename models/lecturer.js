const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNum:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('lecturer', lecturerSchema);