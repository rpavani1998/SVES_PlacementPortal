const db = require('../config/db.config.js');
const JobPost = db.job_post;
const JobPostActivity = db.job_post_activity;
const JobStage = db.jobstage;
const JobProcesses = db.jobprocess;
const Company = db.company;
const JobType = db.job_type; 
const Sequelize = db.sequelize;
const JobProcess = db.jobprocess;
const AddJob = db.job_post;
const util = require('../controllers/utils.controller')

// Post a JobPost
exports.create = (req, res) => {
	let job_post = req.body;
	JobPost.create(job_post).then(result => {	
		res.json('X'+result.id);
	});
};
const VerifiedEducationDetail = db.verified_education_detail;
const StudentJobApp = db.studentjobapp;
let job_id;
const JobPosts = db.job_post;
const StudentPlacementStatus = db.studentplacementstatus;

const Op = Sequelize.Op;

exports.register = (req, res) => {
	let job_post_activity = req.params;
	JobPostActivity.create(job_post_activity).then(result => {	
		res.json('X'+result.id);
		JobPost.findById(req.post_id).then(post => {
			StudentJobApp.update(
				{ is_qualified : 'Applied' },
				{where : {roll_no : req.params.roll_no , job_process_id : { [Op.like] : req.params.job_post_id+'%' }}}).then(result => {});
			util.mail(req.params.roll_no, 'event_registered', post)
		})
		
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
	JobPost.update(post, { where: {id: req.body.id} }).then(() => {
		res.status(200).json({msg:"updated successfully a post with id = " + req.body.id});
	});	 
};
 
// exports.delete = (req, res) => {
// 	const id = req.params.id;
// 	JobPost.destroy({  where: {id: req.params.id}  }).then(() => {
// 	  res.status(200).json({msg:'deleted successfully a post with id = ' + req.body.id});
// 	});
// }; 

exports.delete = (req, res) => {
	const id = req.params.id;
	StudentPlacementStatus.destroy({
		where : { job_post_id : req.params.id }
	})
	StudentJobApp.destroy({
		where : { job_process_id : { [Op.like] : req.params.id+'%' } }
	})
	JobProcess.destroy({
		where : { job_post_id : req.params.id }
	})
	JobPost.destroy({
	   where: {id: req.params.id} 
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


exports.jobProcesses = (req , res) => {
	JobProcesses.findAll({ where : {job_post_id : req.params.jobId} }).then(jobprocess => {
		res.json(jobprocess) 
	})
}


exports.create = (req, res) => {
	let job = req.body;
	console.log("Job : ", job)
	
	console.log("Company Name from Add Job Controller : ", job.company_name)

	Company.findAll({ where: { company_name: job.company_name } })
		.spread((company, created) => {
			job.company_id = company.company_id
			console.log("Company from Add Job Controller : ", company)
			job.company_id = company.company_id
			JobType.findAll({ where: { job_type_name: req.body.job_type_name } })
				.spread((user, created) => {
					console.log("user : ", user.get({
						plain: true
					}))
					console.log(user.job_type_id)
					// job.company_id = company.company_id
					job.is_active = 1; // 1 indicating open  
					job.job_type = user.job_type_id
					job.college_id = user.college_id

					AddJob.create(job).then(result => {
						job_id = result.id;
						res.json(result) 
						let jobprocess = req.body;
						// util.jobData(result);  
						console.log(" Add Job : Job ID : ", job_id);
						// addjob.addJobprocesses(result, jobprocess) 
						var keys = Object.keys(jobprocess.job_stage_id);
						var len = keys.length;
						// var jobid = result.id;
						VerifiedEducationDetail.findAll({ where: { percentage : { [Op.gte] : req.body.overall_aggregate }  , backlogs : req.body.backlogs , certificate_degree_name : req.body.degree} }).then(eligibleuserdata => {
							for (var i = 0; i < len; i++) {
								JobProcess.create({ job_process_id: job_id.toString() + 0 + jobprocess.job_stage_id[i], job_post_id: job_id, job_stage_id: jobprocess.job_stage_id[i] }).then(jobprocess => {});
								for ( var data in eligibleuserdata ) {
									StudentJobApp.create({ roll_no : eligibleuserdata[data].roll_no , job_process_id : job_id.toString() + 0 + jobprocess.job_stage_id[i] , is_qualified : 'Not applied' }).then(result => {});
								}
							}
							for ( data in eligibleuserdata) {
								StudentPlacementStatus.create({roll_no : eligibleuserdata[data].roll_no , job_post_id : job_id.toString() , placement_status : 'NotSelected'}).then(data =>{})
							}
						});
					});
				})
		})
}


exports.closeJobPost = (req, res) => {
	console.log("Close Job Post")
	let id = req.params.jobID;
	var isactive = 0; 
	var values = { is_active: isactive }
	var condition = { where: { id: id } }
	console.log("Job ID : ", id);
	JobPosts.update(values, condition).then(() => {
		res.status(200).json({ msg: "successfully closed updated job post with id = " + id });
	});
};