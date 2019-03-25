module.exports = function(app) {
 
    const jobposts = require('../controllers/job-post.controller');
 
    app.post('/api/jobposts', jobposts.create);
 
    app.get('/api/jobposts', jobposts.findAll);

    app.get('/api/jobposts/applied/:id', jobposts.findAllApplied);
 
    app.get('/api/jobposts/:id', jobposts.findById);

    app.put('/api/jobposts', jobposts.update);

    app.delete('/api/jobposts/:id', jobposts.delete);

    app.get('/api/jobpost/:roll_no/:job_post_id', jobposts.register)
} 