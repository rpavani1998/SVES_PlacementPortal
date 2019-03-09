module.exports = (sequelize, Sequelize) => {
	const JobType = sequelize.define('job_type', {
	  job_type_id: {
			type: Sequelize.INTEGER,
			primaryKey: true
	  },
	  job_type_name: {
			type: Sequelize.STRING
	  },
	},{
			timestamps: false
	});
	
	return JobType;
}