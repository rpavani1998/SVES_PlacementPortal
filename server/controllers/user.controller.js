const db = require('../config/db.config.js');
const User = db.users;
const md5 = require('md5')

// Post a User
// exports.create = (req, res) => {
// 	let User = req.body;
// 	User.create(User).then(result => {
// 		res.json(result);
// 	}); 
// };

exports.User = (req, res) => {
	let user = req.body;
	User.password = md5(req.body.password)
	User.create(user).then(result => {
		res.json(result);
	}); 
};


exports.authenticate = (req, res) => {
	console.log("id", req.body.id, req.body.password)
	User.findByPk(req.body.id)
		.then(user => {
			console.log(user)
			if (!user) {
				res.json({ success: false, msg: 'Authentication failed. User not found.' });
			} else {
				// check if password matches
				if (md5(req.body.password) == user.password) {
					req.session.user = user.id
					console.log(req.session, req.session.user)
					res.json({ success: true, msg: 'Authentication successful' });
				} else {
					res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
				}
			}
		});
}

exports.isLoggedIn = (req, res) => {
	if (req.session.user)
		res.json({ status: true })
	else
		res.json({ status: false })
}

exports.logout = (req, res) => {
	req.session.destroy((err) => {
    if (err) {
      res.status(500).send('Could not log out.');
    } else {
      res.status(200).send({});
    }
  });
}

exports.findAll = (req, res) => {
	User.findAll().then(users => {
		console.log(users);
		res.json(users);
	});
};

// Find a User by Id
exports.findById = (req, res) => {
	User.findById(req.params.userId).then(User => {
		res.json(User);
	})
};

// Add Students 

exports.addStudents = (req , res) => {
	let data = req.body;
	// console.log("Data : " , data)
	User.findAll({ where : { id : req.body.id } }).then( result => {
		var len = Object.keys(result).length;
		User.create({ id : req.body.id , user_type_id : req.body.user_type_id , college_id : req.body.college_id , branch_id : req.body.branch_id , email : req.body.email , password : md5(req.body.password) , contact_number : req.body.contact_number , sms_notification_active : req.body.sms_notification_active , email_notification_active : req.body.email_notification_active , user_image : req.body.user_image }).then(data => {
			console.log("Inserted Data");
			res.json(data)
		})
	})
}

//Change Password

// exports.changePassword = (req , res) => {
// 	let password = req.params.password;
// 	let id = req.params.id; 
// 	console.log("Password : " , password);
// 	console.log("ID : " , id); 
	
// 	User.findAll( { where : {  id : id } } ).then(data => {
// 		User.update({ password : password } , {id : id} ).then(result => {
// 			console.log("Updated password for id : " + id)
// 		})
// 		res.json(data)
// 	}) 
// }

// Update a User
exports.update = (req, res) => {
	let User = req.body;
	console.log("Update", User)
	let id = req.body.roll_no;
	User.update(User,
		{ where: { roll_no: id } }
	).then(() => {
		res.status(200).json({ msg: "updated successfully a User with id = " + id });
	});
};

// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	User.destroy({
		where: { roll_no: id }
	}).then(() => {
		res.status(200).json({ msg: 'deleted successfully a User with id = ' + id });
	});
};