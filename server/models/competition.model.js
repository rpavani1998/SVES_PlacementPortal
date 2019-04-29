module.exports = (sequelize, Sequelize) => {
	const Competition = sequelize.define('competition', {
     id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
      },
      name: {
          type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    }
	},{
			timestamps: false
	});
	
	return  Competition;
}