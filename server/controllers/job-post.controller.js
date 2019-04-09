const db = require('../config/db.config.js');
const JobPost = db.job_post;
const JobPostActivity = db.job_post_activity;
const JobStage = db.jobstage;
const JobProcesses = db.jobprocess;
const Company = db.company;
const JobType = db.job_type;
const AddJob = db.job_post;
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

exports.jobStages = (req , res) => {
	JobStage.findAll().then(jobstage => {
		console.log(jobstage);
		res.json(jobstage);
	})
};


exports.create = (req, res) => {
	let job = req.body;

	if (job.company_name == 'others') {
		job.company_name = job.cn;
	} else {
		job.company_name = job.company_name;
	}
	console.log("Company Name from Add Job Controller : ", job.company_name)

	Company.findAll({ where: { company_name: job.company_name } })
		.spread((company, created) => {
			console.log("Company ID from Add Job Controller : ", company.company_id)
			job.company_id = company.company_id
			JobType.findAll({ where: { job_type_name: req.body.job_type_name } })

				.spread((user, created) => {
					console.log("user : ", user.get({
						plain: true
					}))
					console.log(user.job_type_id)
					job.company_id = company.company_id
					job.is_active = 1; // 1 indicating open 
					job.job_type = user.job_type_id

					AddJob.create(job).then(result => {
						let job_id = result.id;
						res.json(result)
						let jobprocess = req.body;
						// utils.jobData(result); 
						console.log(" Add Job : Job ID : ", job_id);
						addjobprocess.addJobprocesses(result, jobprocess)
					});
				})
		})
};

exports.jobProcesses = (req , res) => {
	JobProcesses.findAll({ where : {job_post_id : req.params.jobId} }).then(jobprocess => {
		res.json(jobprocess) 
	})
}

exports.addJobprocesses = (result, jobprocess) => {

	// let jobprocess = req.body;
	var keys = Object.keys(jobprocess.job_stage_id);
	var len = keys.length;
	const jobid = result.id; 

	for (var i = 0; i < len; i++) {
		JobProcess.create({ job_process_id:  jobid.toString() + 0 + jobprocess.job_stage_id[i], job_post_id: jobid, job_stage_id: jobprocess.job_stage_id[i] }).then(jobprocess => {
		});
	}
}