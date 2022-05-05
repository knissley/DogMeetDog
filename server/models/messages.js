const { db } = require('../db');

module.exports = {
  getAll: (chatId, callback) => {
    const queryString = `
    SELECT json_agg(
      json_build_object(
        'message', m.message,
        'sender', m.sender
      )
    ) messages
    FROM Messages m
    WHERE m.chat_id = 1
    `;

    db.query(queryString)
      .then((res) => callback(null, res.rows[0].messages))
      .catch((err) => callback(err));
  }
};