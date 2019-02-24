const db = require('../config/db.config.js');
const Company = db.company;

// Post a Student
exports.create = (req, res) => {	
	let company = req.body;
	if ( company.company_name == "others" ) {
		company.company_name = company.cn
		console.log( "Company Name from controller" , company.company_name)
	}		
	Company.create(company).then(result => {
		res.json(result);
	});
};


//Getting Company data
exports.findAll = (req, res) => {
	Company.findAll().then(company => {
		console.log(company);
	  res.json(company);
	});
};
