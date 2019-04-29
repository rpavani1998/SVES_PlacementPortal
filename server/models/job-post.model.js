module.exports = (sequelize, Sequelize) => {
	const AddJob = sequelize.define('job_post', {
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement : true,
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
	  degree : {
		  type : Sequelize.STRING,
	  },
	  backlogs : {
		  type : Sequelize.STRING,
	  },
	  overall_aggregate : {
		  type : Sequelize.STRING
	  },
	  inter_aggregate : {
		  type : Sequelize.STRING,
	  },
	  tenth_aggregate : {
		  type :Sequelize.STRING,
	  },
	},{
			timestamps: false
	});
	
	return AddJob;
}