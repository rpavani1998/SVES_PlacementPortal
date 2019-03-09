const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false,
    underscored : true
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
db.company = require('../models/company.model.js')(sequelize , Sequelize);
db.job_post = require('../models/addjob.model.js')(sequelize , Sequelize);
db.job_posts = require('../models/jobposts.model.js')(sequelize , Sequelize);
db.job_type = require('../models/jobtype.model.js')(sequelize , Sequelize);

db.company.hasMany(db.job_posts )
db.job_posts.belongsTo(db.company )

db.job_posts.hasMany(db.job_type)
db.job_type.belongsTo(db.job_posts)





module.exports = db;
  