const db = require('../config/db.config.js');
const ExperienceDetails = db.experience_details_verified;

// Post a ExperienceDetails
exports.create = (req, res) => {
	let experience_details = req.body;
	ExperienceDetails.create(experience_details).then(result => {	
		res.json('X'+result.id);
	});
};
 

exports.findAll = (req, res) => {
	ExperienceDetails.findAll({where:{roll_no:req.params.id}}).then(experience_details => {
		console.log("INNNNN" , experience_details);
	  res.json(experience_details);
	});
};

// Find a ExperienceDetails by Id
exports.findById = (req, res) => {	
	console.log("Params", req.params)
	ExperienceDetails.findById(req.params.id).then(experience_detail => {
		res.json(experience_detail)
	})
};
 
// Update a ExperienceDetails
exports.update = (req, res) => {
	let experience_detail = req.body;
	console.log("Update",experience_detail)
	ExperienceDetails.update(experience_detail, 
					 { where: {roll_no: req.body.roll_no, start_date: req.body.start_date, end_date: req.body.end_date} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a experience_detail with id = " + req.body.roll_no+ " "+ req.body.start_date + " " + req.body.end_date});
				   });	
};
 
exports.delete = (req, res) => {
	const id = req.params.experience_detailId;
	ExperienceDetails.destroy({
	  where: { where: {roll_no: req.body.roll_no, start_date: req.body.start_date, end_date: req.body.end_date} }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a experience_detail with id = ' + req.body.roll_no+ " "+ req.body.start_date + " " + req.body.end_date});
	});
};