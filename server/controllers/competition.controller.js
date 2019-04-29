const db = require('../config/db.config.js');
const Competition = db.competition;
const CompetitionRegistartion = db.competition_registration;

// Post a Competition
exports.create = (req, res) => {
	let competition = req.body;
	Competition.create(competition).then(result => {	
		res.json('X'+result.id);
	});
};


exports.register = (req, res) => {
	let competition_activity = req.params;
	CompetitionActivity.create(competition_activity).then(result => {	
		res.json('X'+result.id);
	});
};
 

exports.findAll = (req, res) => {
	Competition.findAll().then(competition => {
		console.log(competition);
	  res.json(competition);
	});
};

// Find a Competition by Id
exports.findById = (req, res) => {	
	console.log("Params", req.params)
	Competition.findById(req.params.id).then(post => {
		res.json(post)
	})
};

exports.findAllApplied = (req, res) => {
	CompetitionRegistartion.findAll({attributes: ['comp_id', 'name']},{where:{roll_no:req.params.id}}).then(jobs => {
		console.log(jobs);
	  res.json(jobs);
	});
};

// Update a Competition
exports.update = (req, res) => {
	let post = req.body;
	console.log("Update",post)
	Competition.update(post, 
					 { where: {id: req.body.id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a post with id = " + req.body.id});
				   });	
};
 
exports.delete = (req, res) => {
	const id = req.params.id;
	Competition.destroy({
	  where: { where: {id: req.body.id} }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a post with id = ' + req.body.id});
	});
};