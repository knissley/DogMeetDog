const { users } = require('../models');

module.exports = {
  getAll: (req, res) => {
    const userEmail = req.params.user_email;
    users.getAll(userEmail, (err, results) => {
      if (err) {
        console.log('error: ', err);
        res.sendStatus(404);
      } else {
        res.send(results);
      }
    })
  },
}