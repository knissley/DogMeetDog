const { users } = require('../models');

module.exports = {
  getAll: (req, res) => {
    const userId = req.params.user_id;
    users.getAll(userId, (err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(results);
      }
    })
  },
}