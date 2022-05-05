const { pets } = require('../models');

module.exports = {
  getAll: (req, res) => {
    pets.getAll((err, pets) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(pets);
      }
    })
  }
}