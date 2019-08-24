const dbconnection = require('../config/connection');

const addCity = (body) =>{
  const name = body.name;
  const city = body.city;
  return dbconnection
  .query({text:"INSERT INTO cities(name, city) VALUES ($1,$2)",
          values:[name,city]
          })
}
module.exports = { addCity }