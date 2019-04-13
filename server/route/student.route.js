let upload = require('../config/multer.config.js');

module.exports = function(app) {
 
    const students = require('../controllers/student.controller.js');
    const education_details = require('../controllers/education-details.controller.js');
    const experience_details = require('../controllers/experience-details.controller');

    const students_verified = require('../controllers/student-verified.controller');
    const education_details_verified = require('../controllers/education-details-verified.controller');
    const experience_details_verified = require('../controllers/experience-details-verified.controller');

    app.post('/api/students', students.create);
 
    app.get('/api/students', students.findAll); 
 
    app.get('/api/students/:studentId', students.findById);
 
    app.put('/api/students', students.update);
 
    app.delete('/api/students/:studentId', students.delete);

    app.get('/api/jobprocessplacedstudents/:jobid' , students.getJobProcessPlacedStudents);

    app.get('/api/filtereddata/:passing_year/:branchid' , students.getFilteredData); 

    app.get('/api/placedstudents/:roll_no/:job_id' , students.getPlacedStudents)  

    app.get('/api/jobprofile/:jobprofile' , students.getJobProfile);

    app.get('/api/student/education_details/:branchID' , students.getstudentProfiles);

    app.get('/api/students_verified/:branchid' , students.getVerifiedStudentDetails );

    app.get('/api/registeredstudents/:jobid', education_details.getRegisteredStudents);

    app.get('/api/notregisteredstudents/:jobid', education_details.getNotRegisteredStudents);
 
    app.post('/api/student/education_details', education_details.create);
 
    app.get('/api/student/education_details/:id', education_details.findAll);
 
    app.put('/api/student/education_details', education_details.update);
 
    app.delete('/api/student/education_details/:education_detailId', education_details.delete);

    app.post('/api/student/experience_details', experience_details.create);
 
    app.get('/api/student/experience_details/:id', experience_details.findAll);
 
    app.put('/api/student/experience_details', experience_details.update);
 
    app.delete('/api/student/experience_details/:id', experience_details.delete);

    app.put('/api/notifications',  education_details.approveRequest);

    app.put('/api/notifications/reject',  education_details.rejectRequest);

    app.put('/api/notifications/profileaccept',  education_details.approveProfileRequest); 

    app.put('/api/notifications/profilereject',  education_details.rejectProfileRequest);

    app.put('/api/notifications/expaccept',  education_details.approveExperienceRequest);

    app.put('/api/notifications/expreject',  education_details.rejectExperienceRequest);

    app.get('/api/student/experience_details', experience_details.getExperiences);
 
    app.post('/api/students_verified', students_verified.create);
 
    app.get('/api/students_verified', students_verified.findAll);
 
    app.get('/api/students_verified/:studentId', students_verified.findById);
 
    app.put('/api/students_verified', students_verified.update);
 
    app.delete('/api/students_verified/:studentId', students_verified.delete);
 
    app.post('/api/student/education_details_verified', education_details_verified.create);
 
    app.get('/api/student/education_details_verified/:id', education_details_verified.findAll);
 
    app.put('/api/student/education_details_verified', education_details_verified.update);
 
    app.delete('/api/student/education_details_verified/:education_detailId', education_details_verified.delete);

    app.post('/api/student/experience_details_verified', experience_details_verified.create);
 
    app.get('/api/student/experience_details', experience_details.getExperiences);
    
    app.get('/api/student/experience_details_verified/:id', experience_details_verified.findAll);
 
    app.put('/api/student/experience_details_verified', experience_details_verified.update);
 
    app.delete('/api/student/experience_details_verified/:id', experience_details_verified.delete);

    app.get('/api/notifications/:branchID',  education_details.findByBranchId);

    app.put('/api/notifications',  education_details.approveRequest); 

    app.get('/api/notifications' , education_details.getEducationDetails);
 
    app.get('/api/eligiblestudents/:jobid' , education_details.getJobAppliedStudents);

    app.get('/api/studentdetails/:college/:major/:passing_year/:percentage/:backlogs' , education_details.getData);

}