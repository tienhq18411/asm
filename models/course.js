const mongoose = require('../db/db');

const courseSchema = new mongoose.Schema({
    name: { 
        type: String,
    },
    category:{
        type: String,
    },
    description:{
        type: String,
    },
});

module.exports = mongoose.model('Course', courseSchema);