module.exports = (sequelize, Sequelize) => {
	const UserType = sequelize.define('user_type', {
	  id: {
			type: Sequelize.STRING,
			primaryKey: true
	  },
	  user_type_name: {
			type: Sequelize.STRING
	  },
	},{
			timestamps: false
	});
	
	return UserType;
}