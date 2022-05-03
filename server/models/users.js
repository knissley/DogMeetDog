const { db } = require('../db');

module.exports = {
  getAll: (userEmail, callback) => {
    const queryString = `
    SELECT *
    FROM Users
    WHERE email = '${userEmail}'`;

    db.query(queryString)
      .then(res => callback(null, res.rows[0]))
      .catch(err => callback(err));
  }
}