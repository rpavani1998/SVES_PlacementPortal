module.exports = (sequelize, Sequelize) => {
	const JobPosts = sequelize.define('job_post', {
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
	  },
	  job_type: {
			type: Sequelize.STRING,
	  },
	  job_profile: {
			type: Sequelize.STRING,
	  },
	  job_description : {
		  type : Sequelize.STRING,
	  },
	  job_location : {
		  type : Sequelize.STRING,
	  }, 
	  last_date_for_application : {
		  type : Sequelize.DATE,
	  },
	  salary_lpa: {
		  type : Sequelize.INTEGER,
	  },
	  drive_location : {
		  type : Sequelize.STRING,
	  },
	  is_active : {
		type : Sequelize.STRING,
	  },
	  company_id : {
		  type : Sequelize.STRING,
		  foreignKey : true
	  },
	  ppt_talk : {
		  type : Sequelize.DATE,
      },
      company_name : {
          type : Sequelize.STRING,
      },
      profile_description : {
        type : Sequelize.STRING,
      },
      company_website_url : { 
        type : Sequelize.STRING,
			}, 
			company_image : {
				type : Sequelize.BLOB,
			},
			job_type_id : {
				type : Sequelize.STRING,
			},
			job_type_name : {
				type : Sequelize.STRING,
			},
	},{
			timestamps: false
	});

	return JobPosts;
}