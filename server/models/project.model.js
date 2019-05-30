module.exports = (sequelize, Sequelize) => {
	const Achievement = sequelize.define('project', {
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
    url : {
        type: Sequelize.STRING
      },
    description: {
        type: Sequelize.STRING
    },
    start_date: {
        type: Sequelize.DATEONLY
    },
    end_date: {
        type: Sequelize.DATEONLY
    },
	 
	},{
			timestamps: false
    });
    
	return Achievement;
}
