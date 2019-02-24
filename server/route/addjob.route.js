module.exports = function(app) {
 
    const addjob = require('../controllers/addjob.controller.js');
 
    app.post('/api/addjob', addjob.create);
    // app.get('/api/addjob/:companyDetails', addjob.findById);
}