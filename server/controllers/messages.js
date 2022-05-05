const { messages } = require('../models');

module.exports = {
  getAll: (req, res) => {
    const { chat_id:chatId } = req.params;
    messages.getAll(chatId, (err, messages) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(messages);
      }
    });
  },
  createMessage: (req, res) => {
    const { chatId, sender, message, timestamp} = req.body;
    messages.createMessage(chatId, sender, message, timestamp, (err) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  },
};