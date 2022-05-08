const { db } = require('../db');

module.exports = {
  getAll: (userId, callback) => {
    const queryString = `
    SELECT
    (SELECT
    json_agg(
      json_build_object(
        'chatId', c.id,
        'userName', u.name,
        'petName', p.name,
        'photo', p.photo
      )
    )
    FROM Chats c, Users u, Pets p
    WHERE c.user_two_id = u.id
    AND p.user_id = u.id) chats
    FROM Chats
    WHERE user_one_id = ${userId}
    `;

    db.query(queryString)
      .then((res) => callback(null, res.rows[0].chats))
      .catch((err) => callback(err));
  },
  createChat: (userOneId, userTwoId, callback) => {
    const queryString = `
    INSERT INTO Chats(user_one_id, user_two_id)
    VALUES(${userOneId}, ${userTwoId})
    `;

    db.query(queryString)
      .then((res) => callback(null))
      .catch((err) => callback(err));
  }
};