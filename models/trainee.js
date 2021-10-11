const mongoose = require('../db/db');

const traineeSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email:{
        type: String,

    },
    age:{
        type: String,

    },
    education:{
        type: String,

    }
});

module.exports = mongoose.model('Trainee', traineeSchema);