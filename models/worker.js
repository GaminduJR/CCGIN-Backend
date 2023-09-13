const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    },
    Town:{
        type:String,
        required:true
    },
    cleaningtType:{
        type:String,
        required:true
    },
    phoneNum:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Workers', workSchema);