const { addCity } = require('../database/queries/addCity');

exports.addCity = (req ,res ,next) => {
  const result = req.body;
  addCity(result)
    .then(() => res.redirect('/'))
    .catch(err => next(err))
}