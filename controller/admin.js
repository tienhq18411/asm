const Account = require('../models/admin');
const staff = require('../models/staff');
const Trainee = require('../models/trainee');
const dbo = require('../db/db');

// add new staff
exports.addStaff = async (req, res) =>{
    let newStaff = new staff({
        name: req.body.name,
        email:req.body.email,
        age: req.body.age,
        hometown:req.body.hometown,
    })
    let newAccount = new Account({
        email: req.body.email,
        password: "111",
        Role: "staff"
    })
    newStaff = await newStaff.save();
    newAccount = await newAccount.save();
    res.redirect('/admin/adminViewStaff');
}
exports.getAddStaff = async (req, res) => {
    res.render('adminAddStaff');
}

//view all staff
exports.viewStaff = async (req, res) =>{
    let listStaff = await staff.find();
    res.render('adminViewStaff', {listStaff: listStaff})
}

exports.editStaff = async (req, res) =>{
    let id = req.query.id;
    let aStaff = await staff.findById(id);
    res.render('adminUpdateStaff',{aStaff: aStaff})
}

exports.updateStaff = async (req, res) =>{
    let id = req.body.id;
    let aStaff = await staff.findById(id);
    aStaff.name = req.body.name;
    aStaff.email = req.body.email;
    aStaff.age = req.body.age;
    aStaff.hometown = req.body.hometown;
    try{
        aStaff = await aStaff.save();
        res.redirect('/admin/adminViewStaff');
    }
    catch(error){
        console.log(error);
        res.redirect('/admin/adminViewStaff');
    }
}


exports.deleteStaff = async (req, res) => {
    let id = req.query.id;
    let aStaff = await staff.findById(id);
    let email = aStaff.email;
    console.log(email);
    Account.deleteOne({ 'email': email }, (err) => {
        if (err)
            throw err;
        else 
            console.log('Deleted');
    })
    staff.findByIdAndRemove(id).then(data={});
    res.redirect('/admin/adminViewStaff');
}

