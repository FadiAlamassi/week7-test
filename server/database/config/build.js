const {join} = require('path');
const {readFileSync} =require('fs');


const dbBuild = () => {
  const dbConnection = require('./connection');
  const sql = readFileSync(join(__dirname,'build.sql')).toString();

  // console.log(dbConnection);
return dbConnection.query(sql);
        // .then(res => res)
        // .catch(err => console.log(err))
}

dbBuild();
module.exports = dbBuild;
