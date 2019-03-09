module.exports = function(app) {
 
    const editjobpost = require('../controllers/editjobposts.controller.js');
 
    app.put('/api/editjobposts', editjobpost.updateJP);
}

