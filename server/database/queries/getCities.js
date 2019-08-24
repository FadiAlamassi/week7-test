const dbConnection = require('../config/connection');

const getCities = ()=> dbConnection.query('SELECT * FROM cities');

module.exports = { getCities };