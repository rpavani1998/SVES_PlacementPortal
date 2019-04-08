module.exports = function(app) {
 
    const jobposts = require('../controllers/job-post.controller');
 
    app.post('/api/jobposts', jobposts.create);
 
    app.get('/api/jobposts', jobposts.findAll);

    app.get('/api/jobposts/applied/:id', jobposts.findAllApplied);
 
    app.get('/api/jobposts/:id', jobposts.findById);

    app.put('/api/jobposts', jobposts.update);

    app.delete('/api/jobposts/:id', jobposts.delete);

<<<<<<< HEAD
    app.get('/api/jobpost/:roll_no/:job_post_id', jobposts.register) 

    app.get('/api/job_stage' , jobposts.jobStages);

    app.post('/api/addjob', jobposts.create);

    app.post('/api/addjob', jobposts.addJobprocesses); 
 
    app.get('/api/addjob/:jobId', jobposts.jobProcesses);

 
=======
    app.get('/api/jobpost/:roll_no/:job_post_id', jobposts.register)
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3
} 