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
  createOne: (req, res) => {
    console.log('body in createOne: ', req.body);
    const userDetails = req.body.userDetails;
    const petDetails = req.body.petDetails;
    users.createOne(userDetails, petDetails, (err) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  },
  getProfile: (req, res) => {
    const { user_id } = req.params;
    users.getProfile(user_id, (err, profile) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(profile);
      }
    })
  },
}