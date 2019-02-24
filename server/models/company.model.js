module.exports = (sequelize, Sequelize) => {
	const Company = sequelize.define('company', {
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
          type : Sequelize.STRING
			},
	},{
			timestamps: false
	});
	
	return Company;
}