module.exports = function(app) {
 
    const jobtype = require('../controllers/jobtype.controller.js');
 
    app.get('/api/jobtype/:jobtypeid', jobtype.findById);

    app.get('/api/jobtype', jobtype.findAll);
}