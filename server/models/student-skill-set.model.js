module.exports = (sequelize, Sequelize) => {
	const StudentSkillSet = sequelize.define('branch', {
	  roll_no: {
			type: Sequelize.STRING,
			primaryKey: true
      },
     skill_set_id: {
          type: Sequelize.INTEGER
      },
      skill_set_level: {
        type: Sequelize.INTEGER
      }
	},{
			timestamps: false
    });
    
	return StudentSkillSet;
}
