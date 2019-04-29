module.exports = (sequelize, Sequelize) => {
	const SkillSet = sequelize.define('skill_set', {
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true
      },
      skill_set_name: {
          type: Sequelize.STRING
      }
	 
	},{
			timestamps: false
    });
    
	return SkillSet;
}
