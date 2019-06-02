module.exports = function(app) {
 
    const users = require('../controllers/user.controller.js');
 
    // app.post('/api/users', users.create);

    app.post('/api/users', users.User);
 
    app.get('/api/users', users.findAll);
 
    app.get('/api/users/:userId', users.findById);

    app.post('/api/users/login/', users.authenticate);
 
    app.put('/api/users', users.update);

    app.post('/api/students_data' , users.addStudents);

    // app.post('/api/password/:password/:id', users.changePassword);

    app.post('/api/users/isLoggedIn', users.isLoggedIn);

    app.post('/api/users/logout', users.logout);

    app.delete('/api/users/:userId', users.delete);

    app.put
}