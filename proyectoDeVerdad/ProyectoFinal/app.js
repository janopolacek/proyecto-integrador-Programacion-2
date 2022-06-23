var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')//reqerida la session 

var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');
var productsRouter = require('./routes/products');
const data = require('./database/models')
const users = data.Users

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret:"Alfajores",
resave:false,
saveUninitialized:true,
}));
//pasar datos de sesion a vistas

//paso datos a locals desde session
app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user
  }
  return next();
})

//pregunto por la cookie
app.use(function(req, res, next){
  if(req.cookies.userId != undefined && req.session.user == undefined ){
    let userId = req.cookies.userId;
    //Tengo que ir a la db y preguntar
    users.findByPk(userId)
      .then(function(user){
          req.session.user = user.dataValues
          res.locals.user = user.dataValues
          return next();
      })
      .catch(error => console.log(error))
  } else {
    return next();
  }
    
})




app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/profile', profileRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
