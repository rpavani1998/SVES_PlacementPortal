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
		res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname});
	})
}

// exports.uploadStudentProfiles = (req , res) => {
// 	// console.log(req, req.body.id)
// 	// console.log(req.body.id, req.file.mimetype, req.file.originalname, req.file.buffer)
// 	StudentProfiles.create({ 
// 			 attributes : [
// 				"LOAD DATA LOCAL INFILE" + req.file.originalname + "INTO TABLE boatdb.boats",
// "FIELDS TERMINATED BY" + ',',
// "LINES TERMINATED BY" + '\n',
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
	console.log("Update",education_detail)
	EducationDetails.update(education_detail, 
					 { where: {id: id
					} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a File with id = " + req.body.roll_no + " "+ req.body.certificate_degree_name + " " + req.body.major});
				   });	
};
 
exports.deleteFile = (req, res) => {
	const id = req.params.id;
	File.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a File with id = ' + req.body.roll_no + " "+ req.body.certificate_degree_name + " " + req.body.major});
	});
};

exports.listAllFiles = (req, res) => {
	File.findAll({attributes: ['id', 'name']}).then(files => {
	  res.json(files);
	});
}

{/* <img src="data:image/png;base64,{{c.logo}}" class="rounded-circle" width="45" height="45"></td> */}

exports.getFileById = (req, res) => {
	console.log(req.params.id)
	File.findById(req.params.id).then(file => {
		console.log('fileeeeeeee',req.params.id, file)
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


exports.downloadTex = (req, res) => {
	var tex = `
	\\documentclass{resume}
    \\usepackage{hyperref}
	\\usepackage{xcolor}
	\\usepackage[left=0.5in,top=0.5in,right=0.5in,bottom=0.5in]{geometry} % Document margins
	\\usepackage{etaremune}
	\\usepackage{amsfonts,amssymb}
	\\usepackage{enumerate}
	\\usepackage{multicol}
	\\renewcommand{\\labelenumi}{[\\theenumi]}
	\\name{Pavani Rajula} % Your name
	\\address{B 103, Vertex Pride Apartments, Jaya Bharath Nagar, Nizampet Road, Kukatpally, Hyderabad - 500085} % Your address
	\\address{\\href{https://www.linkedin.com/in/rajula-pavani-7580b711a/}{\\color{blue}{LinkedIn Profile : Rajula Pavani}}} % Your secondary addess (optional)
	\\address{+917207874257 | rpavani1998@gmail.com | 15wh1a1234@bvrithyderabad.edu.in} % Your phone number and email
	
	\\begin{document}
	
	%----------------------------------------------------------------------------------------
	%	EDUCATION SECTION
	%----------------------------------------------------------------------------------------
	% \\begin{rSection}{Objective}
	
	% \\textbf{
	% To obtain a challenging position in IT industry that utilizes and strengthens my skills, and also broadens my knowledge of the field.
	% \\end{rSection}
	
	\\begin{rSection}{Education}
	
	{\\bf BVRIT Hyderabad College of Engineering for Women} \\hfill {\\em August 2015- Present} \\\\
	{\\sl B.Tech,} Information Technology,\\\\
	Average Percentage: 71.28\\%
	
	{\\bf Sree Ramachandra Junior College, Hyderabad} \\hfill {\\em April 2013 - March 2015} \\\\
	{\\sl Senior Secondary}\\\\
	Percentage: 91.7\\%
	
	{\\bf Sri Gurudatta High School, Hyderabad} \\hfill {\\em March 2013} \\\\
	{\\sl Higher Secondary} \\\\
	Cumulative GPA  : 9.2
	
	\\end{rSection}
	
	
	\\begin{rSection}{Work Experience}
	
	\\bf Outreachy Intern for the May 2018-August 2018 under the organization Ceph.\\\\
	\\sl -  Project : Creation of a CephFS Shell and CLI Tool.\\
	
	\\bf Part of WISE Microsoft Mentorship Program.\\\\
	\\sl - Developed an Android application WAYFARER and a chatbot KRAYA.\\
	
	
	\\end{rSection}
	
	\\begin{rSection}{Technical Skills}
	
	\\begin{tabular}{ @{} >{\\bfseries}l @{\\hspace{6ex}} l }
	Programming Languages & Python3, C/C++, Java, Clojure \\\\
	Web Developments & HTML, CSS, JSP, Servlets, Flask, Node.js, JavaScript, Angular, Bootstrap \\\\
	Other Technologies & Android Programming, Azure\\\\
	Databases & MySQL \\\\
	Tools & Eclipse, LaTeX, Visual Studio, VS Code, Android Studio, Git \\\\
	Operating Systems & Linux, Windows, MacOS \\\\
	\\end{tabular}
	
	\\end{rSection}
	
	\\begin{rSection}{Projects}
	
	\\bf SVES - Placement Portal (Live Project) \\hfill{\\em  Jan'19 - Present}\\\\
	\\textit{M*EAN Stack Project}\\\\
	\\sl - Developing a placement portal website for the entire Sri Vishnu Educational Society.\\\\
	
	\\bf E-Dressing \\hfill{\\em  July'18 - August'18}\\\\
	\\textit{Python Project}\\\\
	\\sl - Developed a augmented reality dressing room, which allows users to foresee how particular wardrobe items will be apt for them shopping online.\\\\
	
	\\bf Kraya \\hfill{\\em  June'18 - July'18}\\\\
	\\textit{Node.js Project}\\\\
	\\sl - Developed a shopping bot, which allows user to explore for a product, compare products and prices from various e-commerce sites.\\\\
	\\pagebreak 
	
	\\bf WayFarer \\hfill{\\em  Feb'18 - May'18}\\\\
	\\textit{Android Project}\\\\
	\\sl - Developed a android application for backpack travellers,to travel in the most efficient and affordable way using public transit.\\\\
	
	\\bf TrollCop \\hfill{\\em  Feb'18}\\\\
	\\textit{Python Project}\\\\
	\\sl - Developed a python application for finding trolls using twitter API.\\\\
	
	\\bf Cabriolet \\hfill{\\em  May'17 - June'17}\\\\
	\\textit{Java Project}\\\\
	\\sl - Developed a Dynamic Web Application for Online Cab Reservation.\\\\
	
	\\bf Karaoke \\- Sing along \\hfill{\\em May'16 - June'16}\\\\
	\\textit{Python Project} \\\\
	\\sl - Modeled a Karaoke Player/MP3 Player.\\\\
	\\sl - Playing music, Recording, Displaying lyrics simultaneously.\\\\
	
	\\end{rSection}
	
	
	\\begin{rSection}{Achivements \\& Participations}
	\\bf Selected as "Young Promising Engineer" of 2015 Batch, BVRIT Hyderabad.\\\\
	\\\\
	\\bf Part of the finalist team in Hack2Hire, an IoT Hackathon conducted by T-Hub \\& Merck Group.\\\\
	\\\\
	\\bf Part of Qualcomm Mentorship Program, organized by Q Cares team, Qualcomm at BVRIT Hyderabad during Sept-Oct 2018.\\\\
	\\\\
	\\bf Part of one of the winning teams of Flipkart \\#BcozGirlsJustWannaCode Hackathon.\\\\
	\\sl - Python Project : E-dressing.\\\\
	\\\\
	\\bf One of the Finalists of TechGigGeekgoddess 2017\\&2018 held at Bengaluru.\\\\
	\\sl - Competitive Programming.\\\\
	\\\\
	\\bf Part of the winning team of project presentation in MEDHANVESH-Technical Fest held at BVRIT Hyderabad in the month of February, 2017.\\\\
	\\sl - Python Project : Karaoke Player.\\\\
	\\\\
	\\bf Participated in Hyderabad's Best Coder 2017\\&2018 conducted by Being Zero.\\\\
	\\sl - Competitive Programming.\\\\
	
	\\bf Part of winning team of HackBattle, a 24hrs hackathon held at BVRIT Hyderabad in the month of January, 2018.\\\\
	\\sl - Python Project : TrollCop.\\\\
	
	\\bf Participated in TechTalk held at Capgemini Hyderabad in the month of June, 2018.\\\\
	\\sl - Impact of Digital in Banking and Financial services.\\\\
	
	\\end{rSection}
	\\pagebreak
	\\begin{rSection}{Extracurricular activities}
	\\begin{itemize}
	\\renewcommand{\\labelitemi}{$\\bullet$}
	\\item Student Cultural Committe Member of the College.
	\\item Student Co-ordinator for Enthusia - Engineer's Day Celebrations.
	\\item Qualified as Peer Counsellor by Jagruthi Foundation.
	\\item Passed BEC Preliminary Examination with Merit.
	\\item Active user on Hackerrank. \\href{https://www.hackerrank.com/rpavani1998}{\\color{blue}{Hackerrank Profile: rpavani1998}}
	\\item Active user on GitHub. \\href{https://github.com/rpavani1998}{\\color{blue}{GitHub Profile: rpavani1998}}
	\\item My Blog. \\href{http://rpavani1998.github.io/}{\\color{blue}{rpavani1998.github.io}}
	\\end{itemize}
	
	
	\\end{rSection}
	
	\\end{document}
	`
	// console.log("Here I am ")
	// const input = fs.createReadStream('input.tex')
	// const output = fs.createWriteStream('output.pdf')
	// const pdf = latex(input)
	 
	// pdf.pipe(output)
	// const selflatex = require('node-latex-pdf');
		console.log("LAtex", req)
		// selflatex(__dirname + '/../input.tex', __dirname + '/', (err,msg) => {
		// 		if(err)
		// 			console.log(`Error, ${msg}`);
		// 		else
		// 			console.log(`Success! ${msg}`);
		// });
	// pdf.on('error', err => console.error(err))
	// pdf.on('finish', () => console.log('PDF generated!'))
	// var fileContents = Buffer.from(output.data, "base64");
	// var readStream = new stream.PassThrough();
	// readStream.end(fileContents)
		
	// res.set('Content-disposition', 'attachment; filename=Resume.pdf');
	// res.set('Content-Type', file.type);

	// readStream.pipe(res);
}

