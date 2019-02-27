const db = require('../config/db.config.js');
const StudentSkillSet = db.student_skill_set;

exports.create = (req, res) => {	
	let student_skill_set = req.body;
	StudentSkillSet.create(student_skill_set).then(result => {	
		res.json(result);
	});
};
 

exports.findAll = (req, res) => {
	StudentSkillSet.findAll().then(student_skill_sets => {
		console.log(student_skill_sets);
	  res.json(student_skill_sets);
	});
};

// Find a StudentSkillSet by Id
exports.findById = (req, res) => {	
	StudentSkillSet.findById(req.params.id).then(student_skill_set => {
		res.json(student_skill_set);
	})
};
 
// Update a StudentSkillSet
exports.update = (req, res) => {
	let student_skill_set = req.body;
	console.log("Update",student_skill_set)
	let id = req.body.roll_no;
	StudentSkillSet.update(student_skill_set, 
					 { where: {roll_no: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a student_skill_set with id = " + id});
				   });	
};
 
// Delete a StudentSkillSet by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	StudentSkillSet.destroy({
	  where: { roll_no: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a student_skill_set with id = ' + id});
	});
};


