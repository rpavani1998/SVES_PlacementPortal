const env = require('../config/env.js');
var Sequelize = require('sequelize');

const db = require('../config/db.config.js');

const JobPosts = db.job_post;
const Company = db.companies;



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


exports.findAll = (req, res) => {  
  db.company.findAll({
    include : [{model : db.job_posts,
    required : true, 
    on: {
      col1: sequelize.where(sequelize.col("company.company_id"), "=", sequelize.col("job_posts.company_id"))
  },
  attributes : ['id' , 'job_type' , 'job_profile' , 'job_description' , 'job_location' , 'last_date_for_application' , 'salary_lpa' , 'drive_location' , 'ppt_talk'],
  include : [{ 
    model : db.job_type,
    required : true,
    on : {
      col1: sequelize.where(sequelize.col("job_posts->job_types.job_type_id"), "=", sequelize.col("job_posts.job_type"))
    },
    attributes : ['job_type_id' , 'job_type_name'],
   }]
  }]
  }).then((jobposts) => {
    console.log("Job Posts :" , jobposts )
    res.json(jobposts)
  });
};

exports.findById = (req, res) => {	
	JobPosts.findById(req.params.companyId).then(jobdata => {
    console.log("Job Data : " , jobdata );
		res.json(jobdata);
	})
};


// Delete a job Post by Id
exports.delete = (req, res) => {
	const jobid = req.params.companyId;
	JobPosts.destroy({
	  where: { id : jobid }
	}).then(() => {
	  res.status(200).json({msg:'successfully deleted job post with id = ' + jobid});
	});
};



// exports.findAll = (req , res) => {
// 	sequelize.query("SELECT * FROM job_posts , companies , job_types where companies.company_id = job_posts.company_id and job_posts.job_type = job_types.job_type_id", { type:Sequelize.QueryTypes.SELECT})
//    .then(function(jobposts) {
// 		 console.log( "All Job Posts with INNER JOIN : " , jobposts );
//       res.json(jobposts) 
//   })
// };


// exports.findById = (req, res) => {	
//   sequelize.query("SELECT * FROM job_posts , companies , job_types where job_posts.id = '" + req.params.companyId + "' and job_posts.company_id = companies.company_id and job_posts.job_type = job_types.job_type_id", { type:Sequelize.QueryTypes.SELECT})
//    .then(job => {
//      console.log( "All Job Posts Details with INNER JOIN : " , job );
//       res.json(job)
//   })
// };



// exports.updateJobPost = (req, res) => {
// 	console.log("In Edit JOb Post Controller");
// 	let id = req.params.jobId;
// 	console.log("Job ID : " , id );
// 	JobPosts.update(jobdata, 
// 					 { where: {id : id} }
// 				   ).then(() => {
// 						 res.json({msg:"successfully updated job post with id = " + id});
// 	});	
// };
