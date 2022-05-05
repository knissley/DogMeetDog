const { db } = require('../db');

module.exports = {
  getAll: (chatId, callback) => {
    const queryString = `
    SELECT json_agg(
      json_build_object(
        'messageId', m.id,
        'message', m.message,
        'sender', m.sender
      )
    ) messages
    FROM Messages m
    WHERE m.chat_id = ${chatId}
    `;

    db.query(queryString)
      .then((res) => callback(null, res.rows[0].messages))
      .catch((err) => callback(err));
  },
  createMessage: (chatId, sender, message, timestamp, callback) => {
    const queryString = `
    INSERT INTO Messages(chat_id, sender, timestamp, message)
    VALUES(${chatId}, '${sender}', '${timestamp}', '${message}')
    `;

    db.query(queryString)
      .then((res) => callback(null))
      .catch((err) => console.log('error is here'));
  }
};