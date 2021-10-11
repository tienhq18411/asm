const mongoose = require('../db/db');

const accSchema = new mongoose.Schema({
    email:{
        type: String,
    },
    password: {
        type: String,
    },
    Role:{
        type: String,
    }},
)

module.exports = mongoose.model('User', accSchema);