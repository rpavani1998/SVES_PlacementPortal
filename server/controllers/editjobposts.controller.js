const db = require('../config/db.config.js');

const JobPosts = db.job_posts;

exports.updateJP = (req, res) => {
	let jobdata = req.body;
	console.log("Update",jobdata)
	let id = req.body.id;
	JobPosts.update(jobdata, 	
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"successfully updated job post with id = " + id});
				   });	
};