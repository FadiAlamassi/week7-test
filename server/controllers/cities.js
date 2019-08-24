const { getCities } = require('../database/queries/getCities');

exports.cities = (req, res,next) => {
getCities()
.then(result => res.send(result.rows))
.catch(err => next(err));
}