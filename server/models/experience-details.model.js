module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('experience_detail', {
        roll_no: {
            type: Sequelize.STRING,
            primaryKey: true
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