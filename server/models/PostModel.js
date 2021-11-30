const myURI = 'postgres://aopnjvmz:6pEHZHG3qBAke78xkIOOh3ugIUi0pj7x@kashin.db.elephantsql.com/aopnjvmz';

const URI = process.env.PG_URI || myURI;

const { Pool } = require ('pg');

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};