const express = require('express');
const moment = require('moment');
const Message = require('../models/Message');

const router = express.Router();

router.get('/', (req, res) => {
  Message.find()
    .sort({ added: -1 })
    .then((response) => {
      res.render('index', {
        title: 'Mini Message Board',
        messages: response,
        moment,
      });
    })
    .catch(() => res.render('error', {
      title: 'Error',
      message: 'Failed to get messages from database',
    }));
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
  const message = new Message({
    text: messageText,
    user: messageUser,
  });

  message
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(() => res.render('error', {
      title: 'Error',
      message: 'Failed to add message to database',
    }));
});

module.exports = router;
