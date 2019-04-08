module.exports = (sequelize, Sequelize) => {
	const JobPosts = sequelize.define('job_posts')
	const Company = sequelize.define('company', {
<<<<<<< HEAD
	  company_id: {
			type: Sequelize.INTEGER,
			primaryKey: true
	  },
	 company_name: {
			type: Sequelize.STRING
	  },
	  profile_description: {
			type: Sequelize.STRING
    },
   company_website_url : {
=======
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
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3
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