module.exports = (sequelize, Sequelize) => {
	const JobPosts = sequelize.define('job_post_activity', {
	  roll_no: {
            type: Sequelize.STRING,
            primaryKey: true
	  },
	  job_post_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
      }
	},{
			timestamps: false
	});

	return JobPosts;
}