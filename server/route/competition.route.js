module.exports = function(app) {
 
    const competitions = require('../controllers/competition.controller');
 
    app.post('/api/competitions', competitions.create);
 
    app.get('/api/competitions', competitions.findAll);

    app.get('/api/competitions/applied/:id', competitions.findAllApplied);
 
    app.get('/api/competitions/:id', competitions.findById);

    app.put('/api/competitions', competitions.update);

    app.delete('/api/competitions/:id', competitions.delete);

    app.get('/api/competition/:roll_no/:id', competitions.register)
}  