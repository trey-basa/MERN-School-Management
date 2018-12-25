const mongoose = require('mongoose');

const SchoolDataSchema = mongoose.Schema({
    schoolname:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    month:{
        type:Number,
        required:true
    },
    week:{
        type:Number,
        required:true
    },
    eeuro:{
        type:Number,
        required:true
    },
    ekhw:{
        type:Number,
        required:true
    },

    heuro:{
        type:Number,
        required:true
    },
    hkhw:{
        type:Number,
        required:true
    },
    weuro:{
        type:Number,
        required:true
    },
    wkhw:{
        type:Number,
        required:true
    }

});
module.exports = mongoose.model('schooldata',SchoolDataSchema);
