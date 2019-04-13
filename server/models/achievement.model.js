module.exports = (sequelize, Sequelize) => {
	const Achievement = sequelize.define('achievement', {
	  id: {
            type: Sequelize.STRING,
            autoIncrement: true,
			primaryKey: true
      },
      roll_no: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
      description: {
          type: Sequelize.STRING
      }
	 
	},{
			timestamps: false
    });
    
	return Achievement;
}
