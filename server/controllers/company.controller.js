const db = require('../config/db.config.js');
const Company = db.company; 
const AddJob = db.job_post;
exports.create = (req, res) => {	
	let company = req.body;
	Company.create(company).then(result => {
		Company.findAll({ where : { company_name : result.company_name } }).then(company => {
			res.json(company)
		})
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
