module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user_account', {
	  id: {
			type: Sequelize.STRING,
			primaryKey: true
	  },
	 user_type_id: {
			type: Sequelize.STRING
      },
     college_id: {
        type: Sequelize.STRING
     },
     email: {
        type: Sequelize.STRING
    },
     password: {
        type: Sequelize.STRING
      },
	 contact_number: {
			type: Sequelize.STRING
     },
     sms_notification_active: {
         type: Sequelize.BOOLEAN
     },
     email_notification_active: {
        type: Sequelize.BOOLEAN
    },
    user_image: {
        type: Sequelize.STRING
    },
	},{
			timestamps: false
	});
	
	return User;
}