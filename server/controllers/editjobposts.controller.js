const db = require('../config/db.config.js');

const JobPosts = db.job_post;

// exports.updateJP = (req, res) => {
// 	let jobdata = req.body;
// 	console.log("Update", jobdata)
// 	let id = req.body.id;
// 	var values = { job_profile: jobdata[0].job_profile , job_description: jobdata[0].job_description, job_location: jobdata[0].job_location, last_date_for_application: jobdata[0].last_date_for_application, salary_lpa: jobdata[0].salary_lpa }
// 	// console.log("Values : " , values)
// 	var con = { where: { id: jobdata[0].id } }; 
// 	JobPosts.update(values  , con).then(() => {
// 		res.status(200).json({ msg: "successfully updated job post with id = " + id });
// 	});  
// };

// exports.closeJobPost = (req, res) => {
// 	console.log("Close Job Post")
// 	let id = req.params.jobID;
// 	var isactive = 0; 
// 	var values = { is_active: isactive }
// 	var condition = { where: { id: id } }
// 	console.log("Job ID : ", id);
// 	JobPosts.update(values, condition).then(() => {
// 		res.status(200).json({ msg: "successfully closed updated job post with id = " + id });
// 	});
// };