const db = require('../config/db.config.js');
const Student = db.students;
const util = require('../controllers/utils.controller')
const VerifiedEducationDetail = db.verified_education_detail;
const StudentPlacementStatus = db.studentplacementstatus;
const AddJob = db.job_post;
const Branch = db.branch;
const JobProcess = db.jobprocess;
const StudentJobApp = db.studentjobapp;
const sequelize = db.sequelize;
const Op = sequelize.Op;




// Post a Student
exports.create = (req, res) => {	
	let student = req.body;
	Student.create(student).then(result => {	
		res.json(result);
		util.mail(result.roll_no, 'profile_verfication_request', result)
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

exports.getstudentProfiles = (req , res) => {
	Student.findAll({where : {branch : req.params.branchID , status : "Requested"} }).then(student => {
		res.json(student); 
	})
}
 

exports.getVerifiedStudentDetails = (req , res) => {
	VerifiedEducationDetail.findAll({where : {  major : req.params.branchid}}).then(details => {
		res.json(details)
	})	  
}   

exports.getFilteredData = (req , res) => {
		VerifiedEducationDetail.findAll({where : {  passing_year : req.params.passing_year , major : req.params.branchid}}).then(details => {
			res.json(details)
		})
}   


exports.getPlacedStudents = (req , res) => {
	StudentPlacementStatus.findAll({where : {roll_no : req.params.roll_no ,job_post_id : req.params.job_id}}).then(details => {
		res.json(details) 
	})	  
}    

exports.getJobProfile = (req , res) => {
	AddJob.findAll({where : {job_profile : req.params.jobprofile} }).then(jobprofile => {
		console.log(jobprofile)
		res.json(jobprofile)
	})
}
exports.getJobProcessPlacedStudents = (req, res) => {
	StudentJobApp.findAll({ 
		where : {  job_process_id : { [Op.like] : req.params.jobid+'%' }}
	}).then(appliedstudents => {
		// console.log(appliedstudents)
		res.json(appliedstudents)
	})
};  