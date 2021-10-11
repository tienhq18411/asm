const Account = require('../models/admin');
const staff = require('../models/staff');
const dbo = require('../db/db');
const trainee = require('../models/trainee');


exports.viewTrainee = async (req, res) =>{
    let listTrainee = await trainee.find();
    res.render('viewTrainee', {listTrainee: listTrainee})
}