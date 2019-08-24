const {join} = require('path');
const {readFileSync} =require('fs');


const dbBuild = () => {
  const dbConnection = require('./connection');
  const sql = readFileSync(join(__dirname,'build.sql')).toString();

  return dbConnection.query(sql);
}

dbBuild();
module.exports = dbBuild;
