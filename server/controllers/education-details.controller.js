const db = require('../config/db.config.js');
const EducationDetails = db.education_details;

// Post a EducationDetails
exports.create = (req, res) => {
	console.log("INNNNNNNNNN")
	req.body.roll_no = req.session.user	
	console.log(req.body, req.session.user)
	let education_details = req.body;
	EducationDetails.create(education_details).then(result => {	
		res.json(result);
	});
};
 

exports.findAll = (req, res) => {
	EducationDetails.findAll().then(education_details => {
		console.log(education_details);
	  res.json(education_details);
	});
};

// Find a EducationDetails by Id
exports.findById = (req, res) => {	
	EducationDetails.findById(req.params.education_detailId).then(education_detail => {
		res.json(education_detail);
	})
};
 
// Update a EducationDetails
exports.update = (req, res) => {
	let education_detail = req.body;
	console.log("Update",education_detail)
	let id = req.body.roll_no;
	EducationDetails.update(education_detail, 
					 { where: {roll_no: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a education_detail with id = " + id});
				   });	
};
 
exports.delete = (req, res) => {
	const id = req.params.education_detailId;
	EducationDetails.destroy({
	  where: { roll_no: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a education_detail with id = ' + id});
	});
};