const addCity = require('../database/queries/addCity');

exports.addCity = (req ,res ,next) => {
  const result = req.body;
  console.log(result);
  addCity(result)
  res.redirect('/');
}