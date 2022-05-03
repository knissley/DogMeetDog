const { Pool } = require('pg');

const poolOptions = {
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'dogmeetdog',
};

const pool = new Pool(poolOptions);

pool.connect()
  .then(() => console.log('Database running.'))
  .catch((err) => console.log('Database connection failed with error: ', err));


exports.db = pool;