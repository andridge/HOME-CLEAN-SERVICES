const express = require('express');
const routes = require('./routes/routes');  // Import the routes file
const path = require('path');
const http  = require("http");
const fs = require('fs').promises;
const app = express();
const db = require("./models");
const axios = require('axios');
//
var passport = require('passport');
var session = require('express-session');
//
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
//
 // session secret
 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions
//
//models
const models = require('./models');
//
var bodyParser = require('body-parser');
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//
var authRoute = require('./routes/auth_routes')(app,passport);
//load passport strategies
require('./passport/passport.js')(passport,models.User)
//
// For Passport
//
db.sequelize.sync({force:false});
// Mount the routes at the root path of the app
  // Pass the express object to the routes function
  // set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("views"));
// index page
app.get("/",(req,res)=>{
  res.render("mainPage");
});
app.get('/work-single', (req, res) => {

  res.render('work-single');
  
  });
  app.get('/payWall', (req, res) => {

    res.render('payWall');
    
    });
    
//app.use( express.static(path.join(__dirname, '/views')));

app.use('/api_v1', routes(express));

// Start the server on port 8080

//CHANGE HAPA TO PORT 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}. Works niggaaaaaaaa.`);
});
