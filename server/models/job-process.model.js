module.exports = (sequelize, Sequelize) => {
	const JobProcess = sequelize.define('job_process', {
	job_process_id: {
		type: Sequelize.STRING,
		primaryKey : true,
	},
    job_post_id: {
			type: Sequelize.INTEGER,
    },
    job_stage_id : {
        type : Sequelize.INTEGER,
    },
	},{
			timestamps: false
	});
	
	return JobProcess;
}

