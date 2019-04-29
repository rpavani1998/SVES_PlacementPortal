module.exports = (sequelize, Sequelize) => {
	const StudentPlacementStatus = sequelize.define('student_placement_status', {
	  roll_no: {
            type: Sequelize.STRING,
            primaryKey: true
	  },
	  job_post_id: {
            type: Sequelize.INTEGER,
            foreignKey: true
      },
      placement_status: {
          type: Sequelize.STRING
      }
	},{
			timestamps: false
	});

	return StudentPlacementStatus;
}