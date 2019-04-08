module.exports = function(app) {
 
    const jobtype = require('../controllers/jobtype.controller.js');
 
<<<<<<< HEAD
    app.get('/api/jobtype/:jobtypeid', jobtype.findById);

=======
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3
    app.get('/api/jobtype', jobtype.findAll);
}