const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.listen(3000);
