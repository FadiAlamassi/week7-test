const {Pool} = require('pg');
require('env2')('config.env');

// let dbUrl =  process.env.DATABASE_URL;
let dbUrl ='';
if(process.env.NODE_ENV = 'development'){
  dbUrl = process.env.DB_URL;
}else{
  dbUrl = process.env.DATABASE_URL;
}

if (!dbUrl) {
  throw new Error('Enviroment variable DB_URL must be set');
}

const options = {
  connectionString:dbUrl,
  ssl:true,
}

module.exports = new Pool(options);