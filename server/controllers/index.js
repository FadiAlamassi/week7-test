const express = require("express");
const {cities} = require('./cities');
const {addCity} = require('./addCity');

const router = express.Router();

router.use('/cities',cities);
router.use('/add-city',addCity);
module.exports = router;
