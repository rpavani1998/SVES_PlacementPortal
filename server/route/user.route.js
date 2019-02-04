module.exports = function(app) {
 
    const users = require('../controllers/user.controller.js');
 
    app.post('/api/users', users.create);

    app.post('/api/users/login', users.authenticate);
 
    app.get('/api/users', users.findAll);
 
    app.get('/api/users/:userId', users.findById);
 
    app.put('/api/users', users.update);
 
    app.delete('/api/users/:userId', users.delete);
}