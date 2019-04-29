const db = require("../config/db.config")
const College = db.college;

exports.create = (req, res) => {	
	let college = req.body; 
	console.log("College : " , college)
	College.create(college).then(result => {	
		res.json(result);
	});
};

exports.findAll = (req, res) => {
	College.findAll().then(colleges => {
		console.log(colleges);
	  res.json(colleges);
	});
};

// Find a College by Id
exports.findById = (req, res) => {	
	College.findById(req.params.id).then(college => {
		res.json(college);
	})
};
 
// Update a College
exports.update = (req, res) => {
	let college = req.body;
	console.log("Update",college)
	let id = req.body.roll_no;
	College.update(college, 
					 { where: {roll_no: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a college with id = " + id});
				   });	
};
 
// Delete a College by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	College.destroy({
	  where: { roll_no: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a college with id = ' + id});
	});
};


