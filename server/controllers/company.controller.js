const db = require('../config/db.config.js');
const Company = db.company;
const AddJob = db.job_post;
exports.create = (req, res) => {	
	let company = req.body;
	if ( company.company_name == "others" ) {
		company.company_name = company.cn
		console.log( "Company Name from controller" , company.company_name)
	}		
	Company.create(company).then(result => {
		res.json(result)
	});
};

exports.findById = (req, res) => {	
	Company.findById(req.params.id).then(company => {
		res.json(company);
	})
};
 

exports.getCompanyProfiles = (req, res) => {	
	AddJob.findAll( {
		attributes : ['job_profile'],
		where : {company_id : req.params.companyid},
	}).then(companyprofile => {
		console.log("Company Profiles : " , companyprofile)
		res.json(companyprofile);
	})   
}; 

//Getting Company data
exports.findAll = (req, res) => {
	Company.findAll().then(company => {
		console.log(company);
	  res.json(company);
	});
};
