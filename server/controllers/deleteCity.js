const { deleteCity  } = require('../database/queries/deleteCity');

exports.deleteCity = (req,res,next) => {
  const id = req.body.cityID;
  deleteCity(id)
  .then(()=> res.redirect('/'))
  .catch(err => next(err))
}