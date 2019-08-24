const express = require("express");
const {cities} = require('./cities');
const {addCity} = require('./addCity');
const {deleteCity} = require('./deleteCity');

const router = express.Router();

router.get('/cities',cities);
router.post('/add-city',addCity);
router.post('/deleteCity', deleteCity)

module.exports = router;
