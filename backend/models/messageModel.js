const dataBase = require('../config/mysql'); 

const Message = {
  sendMessage: (message, callback) => {
    dataBase.query('INSERT INTO messages SET ?', message, (error, results) => {
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, results);
    });
  },
};

module.exports = Message;
