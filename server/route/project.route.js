module.exports = function(app) {
    const project = require('../controllers/project.controller.js');


    app.post('/api/project', project.create);
 
    // app.get('/api/project', project.findAll);             
 
    app.get('/api/projects/:roll_no', project.findAll);
 
    app.put('/api/project', project.update);

    app.delete('/api/project/:userId',  project.delete);
}    