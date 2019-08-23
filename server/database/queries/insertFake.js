const dbConnection = require('../config/connection');

const insertFake = () => {
  const sql = "INSERT INTO cities(name, city) VALUES ('Fadi','London')"
  return dbConnection
    .query(sql)
}
insertFake();
module.exports =insertFake;