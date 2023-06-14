const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 3000;
const dbURI = process.env.CONNECTION_STRING;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(PORT);
  })
  .catch(console.log);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page not found' });
});
