module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define('verified_education_detail', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		roll_no: {
			type: Sequelize.STRING,
		},
		certificate_degree_name: {
			type: Sequelize.STRING
		},
		board: {
			type: Sequelize.STRING
		},
		major: {
			type: Sequelize.STRING
		},
		institute_university_name: {
			type: Sequelize.STRING
		},
		passing_year:{
			type:Sequelize.INTEGER
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

