const env = {
  database: 'sves_db',
  username: 'root',
  password: '',
  host: 'ec2-3-14-3-49.us-east-2.compute.amazonaws.com',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;