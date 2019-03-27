const db = require('../config/db.config.js');
const JobPost = db.job_post;
const JobPostActivity = db.job_post_activity;

// Post a JobPost
exports.create = (req, res) => {
	let job_post = req.body;
	JobPost.create(job_post).then(result => {	
		res.json('X'+result.id);
	});
};


exports.register = (req, res) => {
	let job_post_activity = req.params;
	JobPostActivity.create(job_post_activity).then(result => {	
		res.json('X'+result.id);
	});
};
 

exports.findAll = (req, res) => {
	JobPost.findAll().then(job_post => {
		console.log(job_post);
	  res.json(job_post);
	});
};



// Find a JobPost by Id
exports.findById = (req, res) => {	
	console.log("Params", req.params)
	JobPost.findById(req.params.id).then(post => {
		res.json(post)
	})
};

exports.findAllApplied = (req, res) => {
	JobPostActivity.findAll({where:{roll_no:req.params.id}}).then(jobs => {
		console.log(jobs);
	  res.json(jobs);
	});
};
 
// Update a JobPost
exports.update = (req, res) => {
	let post = req.body;
	console.log("Update",post)
	JobPost.update(post, 
					 { where: {id: req.body.id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a post with id = " + req.body.id});
				   });	
};
 
exports.delete = (req, res) => {
	const id = req.params.id;
	JobPost.destroy({
	  where: { where: {id: req.body.id} }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a post with id = ' + req.body.id});
	});
};