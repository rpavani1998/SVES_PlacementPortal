module.exports = function(app) {
 
    const users = require('../controllers/user.controller.js');
 
    app.post('/api/users', users.create);
 
    app.get('/api/users', users.findAll);
 
    app.get('/api/users/:userId', users.findById);

    app.get('/api/users/login', users.authenticate);
 
    app.put('/api/users', users.update);
 
    app.delete('/api/users/:userId', users.delete);
}