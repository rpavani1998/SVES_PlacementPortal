const env = {
  database: 'sves_db',
  username: 'root',
  password: 'root',
  host: '0.0.0.0',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;