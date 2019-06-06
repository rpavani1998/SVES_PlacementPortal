var stream = require('stream');

const db = require('../config/db.config.js');
const File = db.files;
const UserAccounts = db.users;
const StudentProfiles = db.students;
const latex = require('node-latex')
const fs = require('fs')
var tostream = require('string-to-stream')

exports.uploadFile = (req, res) => {
	console.log(req, req.body.id)
	console.log(req.body.id, req.file.mimetype, req.file.originalname, req.file.buffer)
	File.create({
		id: req.body.id,
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer
	}).then(() => {
		res.json({ msg: 'File uploaded successfully! -> filename = ' + req.file.originalname });
	})
}

// exports.uploadStudentProfiles = (req , res) => {
// 	// console.log(req, req.body.id)
// 	// console.log(req.body.id, req.file.mimetype, req.file.originalname, req.file.buffer)
// 	StudentProfiles.create({ 
// 			 attributes : [
// 				"LOAD DATA LOCAL INFILE" + req.file.originalname + "INTO TABLE boatdb.boats",
// "FIELDS TERMINATED BY" + ',',
// "LINES TERMINATED BY" + '\\n',
// "IGNORE 1 LINES",
// "(roll_no , first_name . last_name , branch , dob , backlogs , aadhar_no , pan_no , status)",
// "set date_made = STR_TO_DATE(@datevar,'%m/%d/%Y');"
// 			]


// 	}).then(() => {
// 		res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname});
// 	})
// }


// exports.uploadUserAaccounts = (req , res) => {
// 	console.log(req, req.body.id)
// 	console.log(req.body.id, req.file.mimetype, req.file.originalname, req.file.buffer)
// 	UserAccounts.create({ 
// 		id: req.body.id,
// 		type: req.file.mimetype,
// 		name: req.file.originalname,
// 		data: req.file.buffer
// 	}).then(() => {
// 		res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname});
// 	})
// }

exports.updateFile = (req, res) => {
	const id = req.params.id;
	console.log("Update", education_detail)
	EducationDetails.update(education_detail,
		{
			where: {
				id: id
			}
		}
	).then(() => {
		res.status(200).json({ msg: "updated successfully a File with id = " + req.body.roll_no + " " + req.body.certificate_degree_name + " " + req.body.major });
	});
};

exports.deleteFile = (req, res) => {
	const id = req.params.id;
	File.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).json({ msg: 'deleted successfully a File with id = ' + req.body.roll_no + " " + req.body.certificate_degree_name + " " + req.body.major });
	});
};

exports.listAllFiles = (req, res) => {
	File.findAll({ attributes: ['id', 'name'] }).then(files => {
		res.json(files);
	});
}

{/* <img src="data:image/png;base64,{{c.logo}}" class="rounded-circle" width="45" height="45"></td> */ }

exports.getFileById = (req, res) => {
	console.log(req.params.id)
	File.findById(req.params.id).then(file => {
		console.log('fileeeeeeee', req.params.id, file)
		res.json(file)
	})
}

exports.downloadFile = (req, res) => {
	File.findById(req.params.id).then(file => {
		var fileContents = Buffer.from(file.data, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents)

		res.set('Content-disposition', 'attachment; filename=' + file.name);
		res.set('Content-Type', file.type);

		readStream.pipe(res);
	})
}


function getMonthName(month) {
	return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][parseInt(month) - 1]
}

function generateTexScript(student) {
	let tex_script = `\\documentclass{resume}
   \\usepackage{hyperref}
   \\usepackage{xcolor}
   \\usepackage[left=0.5in,top=0.5in,right=0.5in,bottom=0.5in]{geometry} % Document margins
   \\usepackage{etaremune}
   \\usepackage{amsfonts,amssymb}
   \\usepackage{enumerate}
   \\usepackage{multicol}
   \\renewcommand{\\labelenumi}{[\\theenumi]}
   \\name{` + student.first_name + ` ` + student.last_name + `} % Your name
   \\address{`+ student.roll_no + `@bvrithyderabad.edu.in} % Your phone number and email
   
   \\begin{document}
   
   %----------------------------------------------------------------------------------------
   %	EDUCATION SECTION
   %----------------------------------------------------------------------------------------
   % \\begin{rSection}{Objective}
   
   % \\textbf{
   % To obtain a challenging position in IT industry that utilizes and strengthens my skills, and also broadens my knowledge of the field.
   % \\end{rSection}
   
   \\begin{rSection}{Education}
   `
	for (let i = 0; i < student.education_details.length; i++) {
		tex_script += ` {\\bf ` + student.education_details[i].institute_university_name + `} \\hfill {\\em ` + student.education_details[i].passing_year + ` } \\\\
	   {\\sl `+ student.education_details[i].certificate_degree_name + ` ,} ` + student.education_details[i].major + `\\\\
	   Average Percentage: `+ student.education_details[i].percentage + ` \\% 
		
	   `
	}

	tex_script += `
   \\end{rSection}
   
   
   \\begin{rSection}{Work Experience}
   `
	for (let i = 0; i < student.experience_details.length; i++) {
		tex_script += `  \\bf ` + student.experience_details[i].job_title + ` \\hfill {\\em ` + getMonthName((student.experience_details[i].start_date.slice(5, 7))) + ` ` + student.experience_details[i].start_date.slice(0, 4) + ` - ` + getMonthName((student.experience_details[i].end_date.slice(5, 7))) + ` ` + student.experience_details[i].end_date.slice(0, 4) + ` } \\\\
	   \\sl ` + student.experience_details[i].description + `
	   \\
	   
	   `
	}

	tex_script += `
 
   \\end{rSection}
   
   \\begin{rSection}{Projects}
   

   `

	for (let i = 0; i < student.projects.length; i++) {
		tex_script += ` \\bf ` + student.projects[i].title + ` \\hfill{\\em ` + getMonthName((student.projects[i].start_date.slice(5, 7))) + ` ` + student.projects[i].start_date.slice(0, 4) + ` - ` + getMonthName((student.projects[i].end_date.slice(5, 7))) + ` ` + student.projects[i].end_date.slice(0, 4) + `}\\\\
	\\textit{ `+ student.projects[i].description + `}\\\\
	
	` 
	}

	tex_script += `
   \\end{rSection}
   
   
   \\begin{rSection}{Achivements \\& Participations}

   `
	for (let i = 0; i < student.achievements.length; i++) {
		tex_script += `\\bf ` + student.achievements[i].title + `\\\\
	   \\sl  `+ student.achievements[i].description + `\\\\`
	}
	tex_script += `
   \\end{rSection}
   \\end{document}
   `
	return tex_script
}

exports.generateTex = (req, res) => {


	var fs = require("fs");

	var data = generateTexScript(req.body)

	fs.writeFile("resumes/" + req.body.roll_no + ".tex", data, (err) => {
		if (err)
			console.log(err);
		else
			console.log("Successfully Written to File.");
	});
	// console.log("LAtex", req.body)
	const selflatex = require('node-latex-pdf');
	selflatex('resumes/' + req.body.roll_no + '.tex', 'resumes/', (err, msg) => {
		if (err)
			console.log(`Error, ${msg}`);
		else
			console.log(`Success! ${msg}`);
	});
	

}

exports.downloadPdf = (req, res) => {
	File.findById(req.params.id).then(file => {
	var path = require('path');
	var mime = require('mime');
	var fs = require('fs');
	var file = 'resumes/' + req.params.id + '.pdf';

	var filename = path.basename(file);
	var mimetype = mime.lookup(file);

	res.setHeader('Content-disposition', 'attachment; filename=' + filename);
	res.setHeader('Content-type', mimetype);

	var filestream = fs.createReadStream(file);
	filestream.pipe(res);
	})
}

