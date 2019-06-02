var stream = require('stream');
const db = require('../config/db.config.js');
const EducationDetails = db.education_details;
const VerifiedEducationDetail = db.verified_education_detail;
const Branch = db.branch;
const Student = db.students;
const VerifiedStudents = db.students_verified;
const Experience = db.experience_details;
const VerifiedExperience = db.experience_details_verified;
const util = require('../controllers/utils.controller')
const StudentJobApp = db.studentjobapp;
const sequelize = db.sequelize;
const Op = sequelize.Op;



// Post a EducationDetails
exports.create = (req, res) => {
	let education_details = req.body;
	EducationDetails.create(education_details).then(result => {	
		res.json('E'+result.id);
	});
}; 

// exports.getJobAppliedStudents = (req, res) => {
// 	StudentJobApp.findAll({
// 		attributes :[ [sequelize.literal('distinct `roll_no`'),'roll_no'],
// 		[sequelize.literal('`is_qualified`'),'is_qualified'] ],
// 		distinct : true,
// 		where : {  job_process_id : { [Op.like] : req.params.jobid+'%' }}
// 	}).then(appliedstudents => {
// 		console.log(appliedstudents)
// 		res.json(appliedstudents)
// 	})
// };  

// exports.getRegisteredStudents = (req , res) => {
// 	StudentJobApp.findAll({ 
// 		attributes :[ [sequelize.literal('distinct `roll_no`'),'roll_no'],
// 		[sequelize.literal('`is_qualified`'),'is_qualified'] ],
// 		distinct : true,
// 		where : { is_qualified : 'Applied' , job_process_id : { [Op.like] : req.params.jobid+'%' }}
// 	}).then(nrstudents => {
// 		console.log("Retrieved Applied students");
// 		res.json(nrstudents);
// 	})
// }


// exports.getNotRegisteredStudents = (req , res) => {
// 	StudentJobApp.findAll({
// 		attributes :[ [sequelize.literal('distinct `roll_no`'),'roll_no'],
//         [sequelize.literal('`is_qualified`'),'is_qualified'] ],
// 		distinct : true,
// 		where : { is_qualified : 'Not Applied' , job_process_id : { [Op.like] : req.params.jobid+'%' }}
// 	}).then(nrstudents => {
// 		console.log("Retrieved Not Applied students");
// 		res.json(nrstudents);
// 	})
// }	

exports.findAll = (req, res) => {
	EducationDetails.findAll({where:{major : req.body.id  }}).then(education_details => {
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

exports.getEducationDetails = (req, res) => {
	EducationDetails.findAll().then(education_detail => {
		res.json(education_detail);
	})
}
 
// Update a EducationDetails
exports.update = (req, res) => {
	let education_detail = req.body;
	console.log("Update",education_detail)
	EducationDetails.update(education_detail, 
					 { where: {roll_no: req.body.roll_no, certificate_degree_name: req.body.certificate_degree_name , major: req.body.major
					} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a education_detail with id = " + req.body.roll_no + " "+ req.body.certificate_degree_name + " " + req.body.major});
						 util.mail(req.body.roll_no, 'profile_update_request', education_detail)
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


exports.findByBranchId = (req, res) => {
	let userdata = req.body;
	console.log("Branch : ", req.params.branchID)
	EducationDetails.findAll({ where: { major: req.params.branchID , status : 'requested' } }).then(educationdetail => {
		console.log('ed',educationdetail);
		res.json(educationdetail);
	});
};

exports.getData = (req, res) => {
	console.log("Major : ", req.params.major);
	console.log("Passing Year : ", req.params.passing_year);
	console.log("Percentage : ", req.params.percentage);
	console.log("Backlogs : ", req.params.backlogs);

	// let college = req.params.college;
	let major = req.params.major;
	let percentage = req.params.percentage;
	let passing_year = req.params.passing_year;
	let backlogs = req.params.backlogs; 

	
	
	if (len != 1) {
		var data = []
		var obj = major.split(",")
		var keys = Object.keys(obj); 
		var len = keys.length;
		for ( var i = 0 ; i < len ; i++) {
			data.push(obj[i])
		}
		var con
		con = { where: {  percentage : { [Op.gte] : percentage } , passing_year: passing_year, backlogs: backlogs, major: data } }
			VerifiedEducationDetail.findAll(con).then(filtereddata => {
				console.log("Filtered Data : ", filtereddata);
				res.json(filtereddata)
			})
	} else {
		con = { where: {  percentage : { [Op.gte] : percentage } , passing_year: passing_year, backlogs: backlogs, major: major } }
		VerifiedEducationDetail.findAll(con).then(filtereddata => {
			console.log("Filtered Data : ", filtereddata);
			res.json(filtereddata)
		})
	} 
};

exports.approveRequest = (req, res) => {
	let roll_no = req.body.roll_no;
	let degree = req.body.certificate_degree_name;
	let major = req.body.major;
	let percentage = req.body.percentage;
	let cgpa = req.body.cgpa;
	let comment = req.body.comment;
	console.log("Update")
	var values = req.body
	var con = { where: { roll_no: roll_no } };
	console.log("Roll Number : ", roll_no); 

	VerifiedEducationDetail.findAll({where : { roll_no : req.body.roll_no } }).then(data => {
		console.log("ID : " , data)
		if(data.length > 0 && data.certificate_degree_name == degree ) {
			VerifiedEducationDetail.update({ id : data[0].id , roll_no: roll_no, certificate_degree_name: degree, major: major, percentage: percentage, cgpa: cgpa } , { where : { id : data[0].id , roll_no: roll_no, certificate_degree_name: degree, major: major } } ).then(() => {
				// res.status(200).json({ msg: "successfully update verified education details with roll num = " + roll_no });
			}); 
		} else {
			VerifiedEducationDetail.create(values, con).then(() => {
				// res.status(200).json({ msg: "successfully update verified education details with roll num = " + roll_no });
			});
		} 
	})
 
	var value = { roll_no: roll_no, certificate_degree_name: degree, major: major, percentage: percentage , status : "Verified" }
	var con = { where: { roll_no: roll_no , certificate_degree_name: degree, major: major, percentage: percentage } };

	EducationDetails.update({ roll_no: roll_no, certificate_degree_name: degree, major: major, percentage: percentage , status : "Verified" , comment : comment } , {where : { roll_no: roll_no , certificate_degree_name: degree, major: major, percentage: percentage }} ).then(() => {
		// res.status(200).json({ msg: "successfully update verified education details with roll num = " + roll_no });
	});
	
} 


exports.rejectRequest = (req, res) => {
	console.log(req.body)
	let roll_no = req.body.roll_no;
	let degree = req.body.certificate_degree_name;
	let major = req.body.major;
	let percentage = req.body.percentage; 
	let cgpa = req.body.cgpa;
	let backlogs = req.body.backlogs;
	console.log("Update Reject Request")
	console.log("Roll Number : " , roll_no);

	var value = { roll_no: roll_no, certificate_degree_name: degree, major: major, percentage: percentage, status : "Rejected" , comment : comment }
	var con = { where: { roll_no: roll_no ,  certificate_degree_name: degree, major: major, percentage: percentage } };

	EducationDetails.update(value, con).then(() => {
		res.status(200).json({ msg: "Rejected verification of education details with roll num = " + roll_no });
	});
	
}

exports.approveProfileRequest = (req , res) => {
	let roll_no = req.body.roll_no;
	let first_name = req.body.first_name;
	let last_name = req.body.last_name;
	let branch = req.body.branch;
	let dob = req.body.dob;
	let backlogs = req.body.backlogs;
	let aadhar_no = req.body.aadhar_no;
	let pan_no = req.body.pan_no;

	VerifiedStudents.findAll({ where : { roll_no : roll_no } }).then(student => {
		if ( student.length > 0  ) {
		VerifiedStudents.update({  roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no } , { where : { roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no } } ).then(() => {
			// res.status(200).json({ msg: "successfully update verified education details with roll num = " + roll_no });
		}); 
		}
		else {
			VerifiedStudents.create({  roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no }  ).then(() => {
				// res.status(200).json({ msg: "successfully update verified education details with roll num = " + roll_no });
			});
		}
	})

	var values = { roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no , status : "Verified" , comment : req.body.comment };
	var condition = { where : { roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no } }
	Student.update({ roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no , status : "Verified" , comment : req.body.comment } , { where : { roll_no: roll_no, branch : branch , dob : dob , aadhar_no : aadhar_no , } }).then(result => {
		console.log("Accepted profile request")
	})
}

exports.rejectProfileRequest = (req , res) => {
	let roll_no = req.body.roll_no;
	let first_name = req.body.first_name;
	let last_name = req.body.last_name;
	let branch = req.body.branch;
	let dob = req.body.dob;
	let backlogs = req.body.backlogs;
	let aadhar_no = req.body.aadhar_no;
	let pan_no = req.body.pan_no;
	let comment = req.body.comment;

	var values = { roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no , status : "Rejected" , comment : req.body.comment };
	var condition = { where : { roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no } }
	Student.update({ roll_no: roll_no, first_name : first_name , last_name : last_name , branch : branch , dob : dob , backlogs : backlogs , aadhar_no : aadhar_no , pan_no : pan_no , status : "Rejected" , comment : req.body.comment } , { where : { roll_no: roll_no , branch : branch , dob : dob  , aadhar_no : aadhar_no  } }).then(result => {
		console.log("Rejected profile request")
	})
	
}


exports.approveExperienceRequest = (req, res) => {
	console.log("Update")
	var values = req.body
	var con = { where: { roll_no: req.body.roll_no } };
	console.log("Roll Number : ", req.body.roll_no);

	VerifiedExperience.findAll({where : {roll_no : req.body.roll_no }  }).then(data => {
		if ( data.length > 0 && data.job_title == req.body.job_title ) {
			VerifiedExperience.update(values, con).then(() => {
				// res.status(200).json({ msg: "successfully update verified education details with roll num = " + req.body.roll_no });
			});
		} else {
			VerifiedExperience.create(values, con).then(() => {
				// res.status(200).json({ msg: "successfully update verified education details with roll num = " + req.body.roll_no });
			});
		}
	})

	 
	var value = { roll_no: req.body.roll_no , is_current_job : req.body.is_current_job , start_date : req.body.start_date , end_date : req.body.end_date , job_title : req.body.job_title , company_name : req.body.company_name , job_location_city : req.body.job_location_city , description : req.body.description , status : "Verified" , comment : req.body.comment }
	var con = { where: { roll_no: req.body.roll_no ,  is_current_job : req.body.is_current_job , start_date : req.body.start_date , end_date : req.body.end_date , job_title : req.body.job_title , company_name : req.body.company_name , job_location_city : req.body.job_location_city , description : req.body.description } };

	Experience.update(value, con).then(() => {
		// res.status(200).json({ msg: "successfully update verified education details with roll num = " + req.body.roll_no });
	});
	
} 


exports.rejectExperienceRequest = (req, res) => {
	let roll_no = req.body.roll_no;
	console.log("Update Reject Request")
	console.log("Roll Number : " , roll_no);

	var value = { roll_no: req.body.roll_no , is_current_job : req.body.is_current_job , start_date : req.body.start_date , end_date : req.body.end_date , job_title : req.body.job_title , company_name : req.body.company_name , job_location_city : req.body.job_location_city , description : req.body.description , status : "Rejected" , comment : req.body.comment }
	var con = { where: { roll_no: roll_no , is_current_job : req.body.is_current_job , start_date : req.body.start_date , end_date : req.body.end_date , job_title : req.body.job_title , company_name : req.body.company_name , job_location_city : req.body.job_location_city , description : req.body.description} };

	Experience.update(value, con).then(() => {
		// res.status(200).json({ msg: "Rejected verification of education details with roll num = " + roll_no });
	});	
}