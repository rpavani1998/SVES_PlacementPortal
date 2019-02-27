const db = require('../config/db.config.js');
const EducationDetails = db.education_details;

// Post a EducationDetails
exports.create = (req, res) => {
	let education_details = req.body;
	EducationDetails.create(education_details).then(result => {	
		res.json(result);
	});
};
 

exports.findAll = (req, res) => {
	EducationDetails.findAll({where:{roll_no:req.params.id}}).then(education_details => {
		console.log(education_details);
	  res.json(education_details);
	});
};

// Find a EducationDetails by Id
exports.findById = (req, res) => {	
	EducationDetails.findById(req.params.id).then(education_detail => {
		res.json(education_detail);
	})
};
 
// Update a EducationDetails
exports.update = (req, res) => {
	let education_detail = req.body;
	console.log("Update",education_detail)
	EducationDetails.update(education_detail, 
					 { where: {roll_no: req.body.roll_no, certificate_degree_name: req.body.certificate_degree_name , major: req.body.major
					} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a education_detail with id = " + req.body.roll_no + " "+ req.body.certificate_degree_name + " " + req.body.major});
				   });	
};
 
exports.delete = (req, res) => {
	const id = req.params.id;
	EducationDetails.destroy({
	  where: { roll_no: req.body.roll_no, certificate_degree_name: req.body.certificate_degree_name , major: req.body.major }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a education_detail with id = ' + req.body.roll_no + " "+ req.body.certificate_degree_name + " " + req.body.major});
	});
};