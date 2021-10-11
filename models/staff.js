const mongoose = require('../db/db');

const staffSchema = new mongoose.Schema({
    name: { 
        type: String,

    },
    email:{
        type: String,

    },
    age:{
        type: String,

    },
    hometown:{
        type: String,

    }
});

module.exports = mongoose.model('Staff', staffSchema);