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
 
    app.post('/api/student/education_details', education_details.create);
 
    app.get('/api/student/education_details/:id', education_details.findAll);
 
    app.put('/api/student/education_details', education_details.update);
 
    app.delete('/api/student/education_details/:education_detailId', education_details.delete);

    app.post('/api/student/experience_details', experience_details.create);
 
    app.get('/api/student/experience_details/:id', experience_details.findAll);
 
    app.put('/api/student/experience_details', experience_details.update);
 
    app.delete('/api/student/experience_details/:id', experience_details.delete);

    
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
 
    app.get('/api/student/experience_details_verified/:id', experience_details_verified.findAll);
 
    app.put('/api/student/experience_details_verified', experience_details_verified.update);
 
    app.delete('/api/student/experience_details_verified/:id', experience_details_verified.delete);

    app.get('/api/notifications/:branchID',  education_details.findByBranchId);

    app.put('/api/notifications',  education_details.approveRequest);

    app.get('/api/placements/:percentage' , education_details.getEligibleStudents);

    app.get('/api/studentdetails/:college/:major/:passing_year/:percentage/:backlogs' , education_details.getData);

}