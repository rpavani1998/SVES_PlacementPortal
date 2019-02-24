module.exports = function(app) {
 
    const jobtype = require('../controllers/jobtype.controller.js');
 
    app.get('/api/jobtype', jobtype.findAll);
}