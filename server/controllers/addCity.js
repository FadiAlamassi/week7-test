const { postCity } = require('../database/queries/addCity');

exports.addCity = (req ,res ,next) => {
  const result = req.body;
  postCity(result)
    .then(() => res.redirect('/'))
    .catch(err => next(err))
}