var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
// var passport = require('passport');

// app.use(passport.initialize());
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true
}

app.use(session({
  secret: "its a secret!",
  resave: false,
  saveUninitialized: true,
}));

app.use(cors(corsOptions))

require('./route/student.route.js')(app);
require('./route/user.route.js')(app);

var server = app.listen(4000, function () {
 
    let host = server.address().address
    let port = server.address().port
  
    console.log("App listening at http://%s:%s", host, port);
  })

