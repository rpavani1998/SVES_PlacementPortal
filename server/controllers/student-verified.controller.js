const db = require('../config/db.config.js');
const Student = db.students_verified;
const util = require('../controllers/utils.controller')
// Post a Student
exports.create = (req, res) => {	
	let student = req.body;
	Student.create(student).then(result => {	
		res.json(result);
		util.mail(result.roll_no, 'initial_verification', result)
	});

};
 

exports.findAll = (req, res) => {
	Student.findAll().then(students => {
		console.log(students);
	  res.json(students);
	});
};

// Find a Student by Id
exports.findById = (req, res) => {	
	Student.findById(req.params.studentId).then(student => {
		res.json(student);
	})
};
 
// Update a Student
exports.update = (req, res) => {
	let student = req.body;
	console.log("Update",student)
	let id = req.body.roll_no;
	Student.update(student, 
					 { where: {roll_no: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a student with id = " + id});
						 util.mail(student.roll_no, 'profile_update', student)
					 });	

};
 
// Delete a Student by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Student.destroy({
	  where: { roll_no: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a student with id = ' + id});
	});
};