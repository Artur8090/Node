var createError = require('http-errors');
var express = require('express');
var path = require('path');
const regRouter = require('./routes/user-router')

//var cookieParser = require('cookie-parser');
var logger = require('morgan');
//
const userRouter = require('./routes/user-router');
const homeRouter = require('./routes/home-router');
//var usersRouter = require('./routes/users');
const fs = require('fs')
var app = express()
const config = require('./config')
// view engine setup
const session = require('express-session')
app.use(
  session({
    secret: 'webChat2734',
  })
)
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger(':date[web] :method :url :status'));
app.use(logger('dev'));
const expressLayouts = require('express-ejs-layouts');

const MongoStore = require('connect-mongo')
app.use(
  session({
    secret: 'webChat2734',
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/webchatdb",
    })
  })
)
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(expressLayouts)
app.set('layout', './layouts/main-layout');
app.use('/', homeRouter);

//app.use('/users', usersRouter);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  next(createError(404));
//});

// error handler
const logStream = fs.createWriteStream(
  path.join(__dirname, 'logs.log'), 
  { flags: 'a' }
);
app.use(logger(config.get('log_format'), { stream: logStream }));

//app.get('/', function (req, res) {
//  //res.get('Hello')
//  res.render('index',{
//    title: "Веб-чат",
//    date: (new Date()).toDateString()
//  })
//})
app.use("/forbidden", function (req, res, next) {
  next(createError(403,'Ой! Вам сюда нелзя!'))
})
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter);
app.use(function (req, res, next) {
  next(createError(404,'Страница не найдена. Извините :(('))
});

app.use(function (err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  if (err.status == 404) {
    res.render('error404', {layout: './layouts/error-layout'});
  } else {
    res.render('error', {layout: './layouts/error-layout'});
  }
});


module.exports = app;


