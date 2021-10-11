const Account = require('../models/admin');
const Trainee = require('../models/trainee');
const Course = require('../models/course');
const dbo = require('../db/db');

//add new coursse
exports.addCourse = async (req, res) => {
    let newCourse = new Course({
     name: req.body.name,
     description : req.body.description,
     category : req.body.category
  })
  newCourse = await newCourse.save();
  res.redirect('/staff/staffViewCourse')
}

exports.getAddCourse = async (req, res) => {
    res.render('staffAddCourse');
}

// View all course
exports.viewAllCourse = async (req, res) => {
    let course = await Course.find();
    res.render('staffViewCourse',{course: course})
}

// Edit Course
exports.EditCourse = async (req, res) => {
    let id = req.query.id;
    let aCourse = await Course.findById(id);
    res.render('staffUpdateCourse',{aCourse: aCourse})
}

// Do Edit Course 
exports.doEditCourse = async (req, res) => {
    let id = req.body.id;
    let aCourse = await Course.findById(id);
    aCourse.name = req.body.name;
    aCourse.category = req.body.category;
    aCourse.description = req.body.description;
    try{
        aCourse = await aCourse.save();
        res.redirect('/staff/staffViewCourse');
    }
    catch(error){
        console.log(error);
        res.redirect('/staff/staffViewCourse');
    }
}

// Delete Course
exports.doDeleteCourse = async (req, res) => {
    let id = req.query.id;
    Course.findByIdAndRemove(id).then(data={
    });
    res.redirect('/staff/staffViewCourse');
}





//trainee
exports.viewAllTrainee = async (req, res) => {
    let trainees = await Trainee.find();
    res.render('staffViewTrainee', { _trainees: trainees })
}
exports.addTrainee = async (req, res) => {
    let newAccount = new Account({
        email: req.body.email,
        password: "111",
        Role: "trainee"
    });
    let newTrainee = new Trainee({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        education: req.body.education,
    });
    newTrainee = await newTrainee.save();
    newAccount = await newAccount.save();
    console.log(newTrainee);
    res.redirect('/staff/staffViewTrainee');
}

exports.getAddTrainee = async (req, res) => {
    res.render('staffAddTrainee');
}

exports.editTrainee = async (req, res) => {
    let id = req.query.id;
    let traineeEdit = await Trainee.findById(id);
    res.render('staffUpdateTrainee', { aTrainee: traineeEdit })
}
exports.doEditTrainee = async (req, res) => {
    let id = req.body.id;
    let aTrainee = await Trainee.findById(id);
    aTrainee.name = req.body.name;
    aTrainee.email = req.body.email;
    aTrainee.age = req.body.age;
    aTrainee.education = req.body.education;
    try {
        aTrainee = await aTrainee.save();
        res.redirect('/staff/staffViewTrainee');
    }
    catch (error) {
        console.log(error);
        res.redirect('/staff/staffViewTrainee');
    }

}
exports.deleteTrainee = async (req, res) => {
    let id = req.query.id;
    let aTrainee = await Trainee.findById(id);
    let email = aTrainee.email;
    console.log(email);
    Account.deleteOne({ 'email': email }, (err) => {
        if (err)
            throw err;
        else
            console.log('Account is deleted');
    })
    Trainee.findByIdAndRemove(id).then(data = {});
    res.redirect('/staff/staffViewTrainee');
}


