const { chats } = require('../models/');

module.exports = {
  getAll: (req, res) => {
    const userId = req.params.user_id;
    chats.getAll(userId, (err, chats) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(chats);
      }
    })
  },
  createChat: (req, res) => {
    const { userOneId, userTwoId } = req.body;
    chats.createChat(userOneId, userTwoId, (err, chats) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    })
  },
};