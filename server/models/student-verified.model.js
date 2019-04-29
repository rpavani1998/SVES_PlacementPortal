module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define('verified_student_profile', {
	  roll_no: {
			type: Sequelize.STRING,
			primaryKey: true
	  },
	  first_name: {
			type: Sequelize.STRING
	  },
	  last_name: {
			type: Sequelize.STRING
		},
		branch: {
			type: Sequelize.STRING
		},
		dob: {
			type: Sequelize.DATEONLY
		},
		backlogs: {
			type: Sequelize.STRING 
		},
		aadhar_no: {
			type: Sequelize.STRING
		}
		
	},{
			timestamps: false
	});
	
	return Student;
}