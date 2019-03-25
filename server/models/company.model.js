module.exports = (sequelize, Sequelize) => {
	const JobPosts = sequelize.define('job_posts')
	const Company = sequelize.define('company', {
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true
	  },
	 name: {
			type: Sequelize.STRING
	  },
	  description: {
			type: Sequelize.STRING
    },
   website_url : {
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