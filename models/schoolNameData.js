const mongoose = require('mongoose');

const SchoolNameSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

const User = module.exports = mongoose.model('schoolname',SchoolNameSchema);
