module.exports = (sequelize, Sequelize) => {
	const JobStage = sequelize.define('job_stage', {
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true
	  },
	  stage_name: {
			type: Sequelize.STRING
	  },
	},{
			timestamps: false
	});
	
	return JobStage;
}
