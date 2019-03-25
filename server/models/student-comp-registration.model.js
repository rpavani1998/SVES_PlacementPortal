module.exports = (sequelize, Sequelize) => {
	const JobPostApplication = sequelize.define('student_comp_registrations', {
	  roll_no: {
            type: Sequelize.STRING,
            primaryKey: true
	  },
	  comp_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
      },
      team_name: {
          type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
    }
	},{
			timestamps: false
	});

	return JobPostApplication;
}