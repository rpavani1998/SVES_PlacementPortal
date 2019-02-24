const db = require('../config/db.config.js');

const AddJob = db.job_post;
const JobType = db.job_type;
const Company = db.company;
let cn;

// Post a Student
exports.create = (req, res) => {
	let job = req.body;

	Company.findAll ( { where : { company_name : req.body.company_name } } )

	.spread((company, created) => {
		console.log("company : " , company.get({
		  plain: true
		}))
		job.company_id = company.company_id
	})


	JobType.findAll({ where: {job_type_name: req.body.job_type_name} })
	
	.spread((user, created) => {
		console.log("user : " , user.get({
		  plain: true
		}))
		console.log(user.id)
		job.is_active = 1; // 1 indicating open
		job.job_type = user.id	
		AddJob.create(job).then(result => {	
			res.json(result);
		});
	})
};

// exports.findById = (req, res) => {	

// 	Company.findAll({ where: {company_name: req.params.companyDetails} })
	
// 	.spread((companyid, created) => {
// 		console.log("companyid : " , companyid.get({
// 		  plain: true
// 		}))
// 		AddJob.findAll( { where: {company_id: companyid.company_id} } ).then(job => {
// 			console.log(job)
// 			res.json(job);
// 		})
// 	})
// };


exports.findAll = (req, res) => {
	AddJob.findAll().then(jobtype => {
		console.log(jobtype);
	  res.json(jobtype);
	});
};

// exports.findById = (req, res) => {	
// 	JobType.findById(req.body.job_type).then(jobtype => {
// 		res.json(jobtype);
// 	})
// };	