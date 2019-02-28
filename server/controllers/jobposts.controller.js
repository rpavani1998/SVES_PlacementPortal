const env = require('../config/env.js');
var Sequelize = require('sequelize');

const db = require('../config/db.config.js');
const JobPosts = db.job_post;
const Company = db.company;



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

exports.findAll = (req , res) => {
	sequelize.query("SELECT * FROM job_posts INNER JOIN companies where companies.company_id = job_posts.company_id ", { type:Sequelize.QueryTypes.SELECT})
   .then(function(jobposts) {
		 console.log( "All Job Posts with INNER JOIN : " , jobposts );
      res.json(jobposts)
  })
};

exports.findById = (req, res) => {	
  sequelize.query("SELECT * FROM job_posts INNER JOIN companies where companies.company_id = '" + req.params.companyId + "' and job_posts.company_id = '" + req.params.companyId + "' ", { type:Sequelize.QueryTypes.SELECT})
   .then(function(jobdata) {
     console.log( "All Job Posts Details with INNER JOIN : " , jobdata );
      res.json(jobdata)
  })
};


// sequelize.query("SELECT * FROM job_posts INNER JOIN companies where companies.company_id = '" + req.params.companyId + "' and job_posts.company_id = '" + req.params.companyId + "' ", { type:Sequelize.QueryTypes.SELECT})
//    .then(function(jobdata) {
// 		 console.log( "All Job Posts Details with INNER JOIN : " , jobdata );
//       res.json(jobdata)
//   })