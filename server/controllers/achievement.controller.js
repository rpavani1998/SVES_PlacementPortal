const db = require("../config/db.config")
const Achievement = db.achievement;

exports.create = (req, res) => {	
	let achievement = req.body; 
	console.log("Achievement : " , achievement)
	Achievement.create(achievement).then(result => {	
		res.json('Ach'+result.id);
	});
};

exports.findAll = (req, res) => {
	Achievement.findAll({where:{roll_no:req.params.id}}).then(achievements => {
		console.log(achievements);
	  res.json(achievements);
	});
};

// Find a Achievement by Id
exports.findById = (req, res) => {	
	Achievement.findById(req.params.id).then(achievement => {
		res.json(achievement);
	})
};
 
// Update a Achievement
exports.update = (req, res) => {
	let achievement = req.body;
	console.log("Update",achievement)
	Achievement.update(achievement
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a achievement with id = " + id});
				   });	
};
 
// Delete a Achievement by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Achievement.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a achievement with id = ' + id});
	});
};


