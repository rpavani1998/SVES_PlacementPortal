module.exports = function(app) {
 
    const addjobpost = require('../controllers/addjobpost.controller.js');
 
    app.post('/api/addjobpost', addjobpost.create); 

}