module.exports = function(app) {
 
    const jobposts = require('../controllers/job-post.controller');
    const editjobpost = require('../controllers/editjobposts.controller');
 
    app.post('/api/jobposts', jobposts.create);
 
    app.get('/api/jobposts', jobposts.findAll);

    app.get('/api/jobposts/applied/:id', jobposts.findAllApplied);

    app.put('/api/closejobposts/:jobID', jobposts.closeJobPost);
 
    app.get('/api/jobposts/:id', jobposts.findById);
 
    app.put('/api/jobposts', jobposts.update); 

    app.delete('/api/jobposts/:id', jobposts.delete); 

    app.put('/api/editjobposts' , editjobpost.updateJP);

    app.get('/api/jobpost/:roll_no/:job_post_id', jobposts.register)

    app.get('/api/job_stage' , jobposts.jobStages);

    app.post('/api/addjob', jobposts.create); 

    app.get('/api/addjob/:jobId', jobposts.jobProcesses);
}  