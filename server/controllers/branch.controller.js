const db = require("../config/db.config")
const Branch = db.branch;

exports.create = (req, res) => {	
	let branch = req.body;
	Branch.create(branch).then(result => {	
		res.json(result);
	});
};
 

exports.findAll = (req, res) => {
	Branch.findAll().then(branchs => {
		console.log(branchs);
	  res.json(branchs);
	});
};

// Find a Branch by Id
exports.findById = (req, res) => {	
	Branch.findById(req.params.id).then(branch => {
		res.json(branch);
	})
};
 
// Update a Branch
exports.update = (req, res) => {
	let branch = req.body;
	console.log("Update",branch)
	let id = req.body.roll_no;
	Branch.update(branch, 
					 { where: {roll_no: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a branch with id = " + id});
				   });	
};
 
// Delete a Branch by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Branch.destroy({
	  where: { roll_no: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a branch with id = ' + id});
	});
};


