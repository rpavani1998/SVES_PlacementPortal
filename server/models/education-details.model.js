module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define('education_detail', {
		roll_no: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		certificate_degree_name: {
			type: Sequelize.STRING
		},
		major: {
			type: Sequelize.STRING
		},
		institute_university_name: {
			type: Sequelize.STRING
		},
		start_date: {
			type: Sequelize.DATE
		},
		completion_date: {
			type: Sequelize.DATE
		},
		percentage: {
			type: Sequelize.FLOAT
		},
		cgpa: {
			type: Sequelize.FLOAT
		}

	}, {
			timestamps: false
		});

	return Student;
}