module.exports = (sequelize, Sequelize) => {
	const JobPostApplication = sequelize.define('student_job_application', {
	  roll_no: {
            type: Sequelize.STRING,
            primaryKey: true
	  },
	  job_process_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
      },
      is_qualified: {
          type: Sequelize.STRING
      }
	},{
			timestamps: false
	});

	return JobPostApplication;
}