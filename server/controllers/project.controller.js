const db = require("../config/db.config")
const Project = db.project;

exports.create = (req, res) => {	
	let project = req.body; 
	console.log("Project : " , project)
	Project.create(project).then(result => {	
		res.json('Ach'+result.id);
	});
};

exports.findAll = (req, res) => {
	Project.findAll({where:{roll_no:req.params.roll_no}}).then(projects => {
		console.log(projects);
	  res.json(projects);
	});
};

// Find a Project by Id
exports.findById = (req, res) => {	
	Project.findById(req.params.rollno).then(project => {
		res.json(project);
	})
};
 
// Update a Project
exports.update = (req, res) => {
	let project = req.body;
	console.log("Update",project)
	Project.update(project
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a project with id = " + id});
				   });	
};
 
// Delete a Project by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Project.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a project with id = ' + id});
	});
};


