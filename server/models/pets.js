const { db } = require('../db');

module.exports = {
  getAll: (callback) => {
    const queryString = `
    SELECT
    p.photo,
    p.name,
    u.name AS "ownerName",
    u.id AS "userId"
    FROM Pets p, Users u
    WHERE p.user_id = u.id
    `;

    db.query(queryString)
      .then((res) => callback(null, res.rows))
      .catch((err) => callback(err));
  },
};