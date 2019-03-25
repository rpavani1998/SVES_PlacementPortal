const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false
    },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.sequelize = sequelize;

db.students = require('../models/student.model.js')(sequelize, Sequelize);
db.users = require('../models/user.model.js')(sequelize, Sequelize);
db.education_details = require('../models/education-details.model')(sequelize, Sequelize);
db.experience_details = require('../models/experience-details.model')(sequelize, Sequelize);
db.skill_set = require('../models/skill-set.model')(sequelize, Sequelize);
db.college = require('../models/college.model')(sequelize, Sequelize);
db.branch = require('../models/branch.model')(sequelize, Sequelize);
db.student_skill_set =  require('../models/student-skill-set.model')(sequelize, Sequelize);
db.files = require('../models/file.model.js')(sequelize, Sequelize);
db.company = require('../models/company.model.js')(sequelize , Sequelize);
// db.job_posts = require('../models/jobposts.model.js')(sequelize , Sequelize);
// db.job_type = require('../models/jobtype.model.js')(sequelize , Sequelize);
db.job_post = require('../models/job-post.model.js')(sequelize , Sequelize);
db.job_post_activity  = require('../models/job-post-activity.model')(sequelize , Sequelize);
db.competition = require('../models/competition.model')(sequelize,Sequelize)
db.competition_registration = require('../models/student-comp-registration.model')(sequelize,Sequelize)
// db.company.hasMany(db.job_posts )
// db.job_posts.belongsTo(db.company )
// db.job_posts.hasMany(db.job_type)    
// db.job_type.belongsTo(db.job_posts)
module.exports = db;
  