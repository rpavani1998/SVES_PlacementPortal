const db = require('../config/db.config.js');
const SkillSet = db.skill_set;

// Post a SkillSet
exports.create = (req, res) => {	
	let skill_set = req.body;
	SkillSet.create(skill_set).then(result => {	
		res.json(result);
	});
};
 

exports.findAll = (req, res) => {
	SkillSet.findAll().then(skill_sets => {
		console.log(skill_sets);
	  res.json(skill_sets);
	});
};

// Find a SkillSet by Id
exports.findById = (req, res) => {	
	SkillSet.findById(req.params.id).then(skill_set => {
		res.json(skill_set);
	})
};
 
// Update a SkillSet
exports.update = (req, res) => {
	let skill_set = req.body;
	console.log("Update",skill_set)
	let id = req.body.roll_no;
	SkillSet.update(skill_set, 
					 { where: {roll_no: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a skill_set with id = " + id});
				   });	
};
 
// Delete a SkillSet by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	SkillSet.destroy({
	  where: { roll_no: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a skill_set with id = ' + id});
	});
};


