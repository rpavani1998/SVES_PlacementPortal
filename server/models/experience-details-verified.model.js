module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('verified_experience_detail', {
        id: {
			type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
		},
        roll_no: {
            type: Sequelize.STRING
        },
        is_current_job: {
            type: Sequelize.BOOLEAN
        },
        start_date: {
            type: Sequelize.DATEONLY
        },
        end_date: {
            type: Sequelize.DATEONLY
        },
        job_title: {
            type: Sequelize.STRING
        },
        company_name: {
            type: Sequelize.STRING
        },
        job_location_city: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }

    }, {
            timestamps: false
        });

    return Student;
}