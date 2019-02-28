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


// exports.findAll = (req, res) => {
// 	AddJob.findAll().then(jobposts => {
// 		console.log(jobposts);
// 	  res.json(jobposts);
// 	});
// };
