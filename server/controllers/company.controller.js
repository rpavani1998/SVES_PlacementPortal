const db = require('../config/db.config.js');
const Company = db.company;

// const multer = require('multer');

// const multerConf = {
//   storage : multer.diskStorage({
//     destination : function(req , file , next) {
//       next(null , './images');
//     },
//     filename : function(req , file , next) {
//       const ext = file.mimetype.split('/')[1];
//       next (null , file.fieldname + '-' + Date.now() + '.' + ext );
//       console.log(file);
//     }
//   }),
//   fileFilter : function(req , file , next) {
//     if (!file) {
//       next();
//     }
//     const image = file.mimetype.startsWith('image/');
//     if (image) {
//       next (null , true);
//     } else {
//       next({message : " File type not supported "} , false);
//     }
//   }
// };

// exports.post('/upload' , multer(multerConf).single('company_image'),function(req , res) {
//   if (req.file) {
//     console.log(req.file);
//     req.body.company_image = req.file.filename  
//   }
//   const upload = new uploadSchema(req.body).save();
//   // console.log("Company Image uploaded successfully");
// })


// Post a Student
exports.create = (req, res) => {	
	let company = req.body;
	if ( company.company_name == "others" ) {
		company.company_name = company.cn
		console.log( "Company Name from controller" , company.company_name)
	}		
<<<<<<< HEAD
	Company.create(company).then(result => { 
=======
	Company.create(company).then(result => {
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3
		res.json(result);
	});
};

exports.findById = (req, res) => {	
	Company.findById(req.params.id).then(company => {
		res.json(company);
	})
};
 

//Getting Company data
exports.findAll = (req, res) => {
	Company.findAll().then(company => {
		console.log(company);
	  res.json(company);
	});
};
