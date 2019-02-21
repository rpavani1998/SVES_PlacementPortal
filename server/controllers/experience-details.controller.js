const db = require('../config/db.config.js');
const ExperienceDetails = db.experience_details;

// Post a ExperienceDetails
exports.create = (req, res) => {
	req.body.roll_no = req.session.user	
	console.log(req.body, req.session.user)
	let experience_details = req.body;
	ExperienceDetails.create(experience_details).then(result => {	
		res.json(result);
	});
};
 

exports.findAll = (req, res) => {
	ExperienceDetails.findAll().then(experience_details => {
		console.log(experience_details);
	  res.json(experience_details);
	});
};

// Find a ExperienceDetails by Id
exports.findById = (req, res) => {	
	ExperienceDetails.findById(req.params.id).then(experience_detail => {
		res.json(experience_detail);
	})
};
 
// Update a ExperienceDetails
exports.update = (req, res) => {
	let experience_detail = req.body;
	console.log("Update",experience_detail)
	let id = req.body.roll_no;
	ExperienceDetails.update(experience_detail, 
					 { where: {roll_no: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a experience_detail with id = " + id});
				   });	
};
 
exports.delete = (req, res) => {
	const id = req.params.experience_detailId;
	ExperienceDetails.destroy({
	  where: { roll_no: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a experience_detail with id = ' + id});
	});
};