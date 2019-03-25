const db = require('../config/db.config.js');
const JobType = db.job_type;	

exports.findAll = (req, res) => {
	JobType.findAll().then(jobtype => {
		console.log(jobtype);
	  res.json(jobtype);
	});
};
