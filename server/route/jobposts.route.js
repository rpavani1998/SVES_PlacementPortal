module.exports = function(app) {
 
    const jobposts = require('../controllers/jobposts.controller.js');
 
    app.get('/api/jobposts', jobposts.findAll);

    app.get('/api/jobposts/:companyId', jobposts.findById);


}