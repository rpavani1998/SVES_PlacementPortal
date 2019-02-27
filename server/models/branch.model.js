module.exports = (sequelize, Sequelize) => {
	const Branch = sequelize.define('branch', {
	  id: {
			type: Sequelize.STRING,
			primaryKey: true
      },
      branch_name: {
          type: Sequelize.STRING
      }
	 
	},{
			timestamps: false
    });
    
	return Branch;
}
