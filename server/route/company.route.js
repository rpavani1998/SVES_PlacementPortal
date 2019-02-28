module.exports = function(app) {
 
    const company = require('../controllers/company.controller.js');
 
    app.post('/api/company', company.create);
    
    app.get('/api/company', company.findAll);
}