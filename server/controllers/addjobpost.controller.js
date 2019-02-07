const db = require('../config/db.config.js');
const Company = db.addjobpost;

exports.create = (req, res) => {	
	let company = req.body;
	Company.create(company).then(result => {	
		res.json(result);
	});
};