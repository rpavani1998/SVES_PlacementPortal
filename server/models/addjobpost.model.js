module.exports = (sequelize, Sequelize) => {
	const Company = sequelize.define('company', {
	  company_name: {
			type: Sequelize.STRING,
	  },
	  profile_dscription: {
			type: Sequelize.STRING
	  },
	  company_website_url: {
			type: Sequelize.STRING
		}
	},{
			timestamps: false
	});
	
	return Company;
}