const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
  added: {
    type: Date,
    default: () => new Date(),
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
