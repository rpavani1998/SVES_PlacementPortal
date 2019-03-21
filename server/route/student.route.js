let upload = require('../config/multer.config.js');

module.exports = function(app) {
 
    const students = require('../controllers/student.controller.js');
    const education_details = require('../controllers/education-details.controller.js');
    const experience_details = require('../controllers/experience-details.controller');

    app.post('/api/students', students.create);
 
    app.get('/api/students', students.findAll);
 
    app.get('/api/students/:studentId', students.findById);
 
    app.put('/api/students', students.update);
 
    app.delete('/api/students/:studentId', students.delete);
 
    app.post('/api/student/education_details', education_details.create);
 
    // app.get('/api/student/education_details', education_details.findAll);
 
    app.get('/api/student/education_details/:id', education_details.findAll);
 
    app.put('/api/student/education_details', education_details.update);
 
    app.delete('/api/student/education_details/:education_detailId', education_details.delete);

    app.post('/api/student/experience_details', experience_details.create);
 
    // app.get('/api/student/experience_details', experience_details.findAll);
 
    app.get('/api/student/experience_details/:id', experience_details.findAll);
 
    app.put('/api/student/experience_details', experience_details.update);
 
    app.delete('/api/student/experience_details/:id', experience_details.delete);
}