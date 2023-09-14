const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        unique:true,
        required:true
    },
    cleaningType:{
        type:String,
        required:true
    },
    contactNum:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Workers', workSchema);