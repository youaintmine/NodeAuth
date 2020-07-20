const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
//"express-ejs-layouts": "^2.5.0", paste in jsonpackage
const app = express();

//passport config
require('./config/passport')(passport);

//Database connectivity
//config
const db = require('./config/keys').MongoURI;

//Connect to MongoURI
mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology: true })
  .then( () => console.log('Mongo DB connected'))
  .catch(err => console.log(err));

// const newUser.create({})
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
//ejs
//app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//bodyParser
app.use(express.urlencoded( {extended: false }));

//Express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));

//Passprt
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

//Global vars
app.use((req, res, next) =>{
  res.locals.success_msg = req.flash('success_msg');
  res.local.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})

//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const port = process.env.PORT || 3000;

app.listen(port, console.log(`${port}`));
