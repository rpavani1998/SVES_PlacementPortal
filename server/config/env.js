const env = {
  database: 'sves_db1',
  username: 'root',
  password: 'root',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 30,
	  min: 0,
	  acquire: 90000,
	  idle: 28888
  }
};

module.exports = env;