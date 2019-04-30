module.exports = (sequelize, Sequelize) => {
	const JobPosts = sequelize.define('job_posts')
	const Company = sequelize.define('company', {
	  company_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			auto_increment : true,
	  },
	 company_name: {
			type: Sequelize.STRING
	  },
	  profile_description: {
			type: Sequelize.STRING
    },
   company_website_url : {
          type : Sequelize.STRING
		},
	company_image : {
		type : Sequelize.BLOB
	} 
	},{
			timestamps: false
	});

	return Company;
}