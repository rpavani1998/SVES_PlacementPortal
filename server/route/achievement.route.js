module.exports = function(app) {
    const achievement = require('../controllers/achievement.controller.js');


    app.post('/api/achievement', achievement.create);
 
    app.get('/api/achievement', achievement.findAll);
 
    app.get('/api/achievements/:roll_no', achievement.findAll);
 
    app.put('/api/achievement', achievement.update);

    app.delete('/api/achievement/:userId', achievement.delete);
}