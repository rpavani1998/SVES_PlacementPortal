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