module.exports = function(app) {
 
    const students = require('../controllers/student.controller.js');
 
    app.post('/api/students', students.create);
 
    app.get('/api/students', students.findAll);
 
    app.get('/api/students/:studentId', students.findById);
 
    app.put('/api/students', students.update);
 
    app.delete('/api/students/:studentId', students.delete);
}
