var stream = require('stream');
const db = require('../config/db.config.js');
const EducationDetails = db.education_details;
const VerifiedEducationDetail = db.verified_education_detail;
const Branch = db.branch;

// Post a EducationDetails
exports.create = (req, res) => {
	let education_details = req.body;
	EducationDetails.create(education_details).then(result => {	
		res.json('E'+result.id);
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


exports.findByBranchId = (req, res) => {
	let userdata = req.body;
	console.log("Branch : ", req.params.branchID)
	EducationDetail.findAll({ where: { major: req.params.branchID } }).then(educationdetail => {
		console.log('ed',educationdetail);
		res.json(educationdetail);
	});
};

exports.getEligibleStudents = (req, res) => {
	console.log("Percentage : ", req.params.percentage)
	VerifiedEducationDetail.findAll({ where: { percentage : req.params.percentage } }).then(eligibleuserdata => {
		console.log(eligibleuserdata);
		res.json(eligibleuserdata); 
		util.mail(eligibleuserdata)
	});
};



exports.getData = (req, res) => {
	console.log("College : ", req.params.college);
	console.log("Major : ", req.params.major);
	console.log("Passing Year : ", req.params.passing_year);
	console.log("Percentage : ", req.params.percentage);
	console.log("Backlogs : ", req.params.backlogs);

	let college = req.params.college;
	let major = req.params.major;
	let percentage = req.params.percentage;
	let passing_year = req.params.passing_year;
	let backlogs = req.params.backlogs;

	if (major == "Any") {
		var data = []
		var con
		Branch.findAll({ raw: true }).then(branch => {
			console.log("Branches : ", branch);	
			for (var i = 0; i < branch.length; i++) { 
				console.log("Branch : ", branch[i].id)
				data.push(branch[i].id)
			}
			con = { where: { institute_university_name: college, percentage: percentage, passing_year: passing_year, backlogs: backlogs, major: data } }
			VerifiedEducationDetail.findAll(con).then(filtereddata => {
				console.log("Filtered Data : ", filtereddata);
				res.json(filtereddata)
			})
		})
	} else {
		con = { where: { institute_university_name: college, percentage: percentage, passing_year: passing_year, backlogs: backlogs, major: major } }
		VerifiedEducationDetail.findAll(con).then(filtereddata => {
			console.log("Filtered Data : ", filtereddata);
			res.json(filtereddata)
		})
	} 
};

exports.approveRequest = (req, res) => {
	let roll_no = req.body.roll_no;
	let degree = req.body.degree;
	let major = req.body.major;
	let percentage = req.body.percentage;
	let cgpa = req.body.cgpa;
	let backlogs = req.body.backlogs;
	console.log("Update")
	var values = { roll_no: roll_no, degree: degree, major: major, percentage: percentage, cgpa: cgpa, backlogs: backlogs }
	var con = { where: { roll_no: roll_no } };
	console.log("Roll Number : ", roll_no);

	VerifiedEducationDetail.update(values, con).then(() => {
		res.status(200).json({ msg: "successfully update verified education details with roll num = " + roll_no });
	});

	EducationDetail.destroy({
		where: { roll_no: roll_no }
	}).then(() => {
		res.status(200).json({ msg: 'successfully deleted roll no edu details = ' + roll_no });
	});
}