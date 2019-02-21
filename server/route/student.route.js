module.exports = function(app) {
 
    const students = require('../controllers/student.controller.js');
    const education_details = require('../controllers/education-details.controller.js');

    app.post('/api/students', students.create);
 
    app.get('/api/students', students.findAll);
 
    app.get('/api/students/:studentId', students.findById);
 
    app.put('/api/students', students.update);
 
    app.delete('/api/students/:studentId', students.delete);
 
    app.post('/api/student/education_details', education_details.create);
 
    app.get('/api/student/education_details', education_details.findAll);
 
    app.get('/api/student/education_details/:id', education_details.findById);
 
    app.put('/api/student/education_details', education_details.update);
 
    app.delete('/api/student/education_details/:education_detailId', education_details.delete);

    app.post('/api/student/experience_details', education_details.create);
 
    app.get('/api/student/experience_details', education_details.findAll);
 
    app.get('/api/student/experience_details/:id', education_details.findById);
 
    app.put('/api/student/experience_details', education_details.update);
 
    app.delete('/api/student/experience_details/:id', education_details.delete);
}