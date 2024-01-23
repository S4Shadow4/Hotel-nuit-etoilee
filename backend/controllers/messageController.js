const Message = require('../models/messageModel');

const MessageController = {
  send: (req, res) => {
    const message = req.body;
    Message.sendMessage(message, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(201).json({ message: 'Message sent successfully' });
    });
  },
};

module.exports = MessageController;
