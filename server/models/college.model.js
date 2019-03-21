module.exports = (sequelize, Sequelize) => {
	const College = sequelize.define('college', {
	  id: {
			type: Sequelize.STRING,
			primaryKey: true
      },
      college_name: {
          type: Sequelize.STRING
      }
	 
	},{
			timestamps: false
    });
    
	return College;
}
