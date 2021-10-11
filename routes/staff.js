const express = require('express');
const router = express.Router();
const staffController = require('../controller/staff');
const adminController = require('../controller/admin')

router.post('/login', (req, res)=>{
    res.redirect('staff')
});

router.get('/staff', (req, res)=>{
    res.render('staff');
})

router.get('/staff/staffAddCourse', staffController.getAddCourse);

router.post('/doAddCourse', staffController.addCourse);

router.get('/staff/staffUpdateCourse', staffController.EditCourse);

router.post('/staff/staffUpdateCourse/doEditCourse', staffController.doEditCourse);

router.get('/staff/staffViewCourse', staffController.viewAllCourse);

router.get('/staff/staffDeleteCourse', staffController.doDeleteCourse);


router.get('/staff/staffAddTrainee', staffController.getAddTrainee);

router.post('/doAddTrainee', staffController.addTrainee);

router.get('/staff/staffUpdateTrainee', staffController.editTrainee);

router.post('/staff/staffUpdateTrainee/doEditTrainee', staffController.doEditTrainee);

router.get('/staff/staffViewTrainee', staffController.viewAllTrainee);

router.get('/staff/staffDeleteTrainee', staffController.deleteTrainee);

module.exports = router;