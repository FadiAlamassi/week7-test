const dbConnection = require('../config/connection');

const deleteCity = (id) =>{
  return dbConnection.query(
    { text:"DELETE FROM cities WHERE id =$1",
      values:[Number(id)]
    })
} 
  
module.exports = {deleteCity}