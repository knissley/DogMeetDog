const { db } = require('../db');

module.exports = {
  getAll: (userId, callback) => {
    const queryString = `
    SELECT *
    FROM Users
    WHERE id = ${userId}`;

    db.query(queryString)
      .then(res => callback(null, res.rows[0]))
      .catch(err => callback(err));
  }
}