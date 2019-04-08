const db = require('../config/db.config.js');
const JobType = db.job_type;	

exports.findAll = (req, res) => {
	JobType.findAll().then(jobtype => {
		console.log(jobtype);
	  res.json(jobtype);
	});
};
<<<<<<< HEAD

exports.findById = (req, res) => {	
	console.log('jobtype',req.params.jobtypeid)
	JobType.findById(req.params.jobtypeid).then(jobtype => {
		res.json(jobtype);
	})
};
=======
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3
