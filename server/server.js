var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
// var passport = require('passport');

// app.use(passport.initialize());
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: ['http://localhost:4200','http://localhost:4201'],
  credentials: true
 }

app.use(session({
  secret: "its a secret!",
  resave: false,
  saveUninitialized: true,
}));

app.use(cors(corsOptions))
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header('Content-Type', 'application/X-www-form-urlencoded');
  next();
});
require('./route/student.route.js')(app);
require('./route/user.route.js')(app);
require('./route/utils.route')(app);
// require('./route/addjob.route.js')(app);  
require('./route/job-type.route')(app);  
require('./route/job-post.route.js')(app); 
require('./route/company.route')(app)
<<<<<<< HEAD
require('./route/competition.route')(app)
=======
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3
// require('./route/editjobpost.route.js')(app); 

let router = require('./route/file.router.js');
app.use('/', router);
<<<<<<< HEAD
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
=======
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3

var server = app.listen(4000, function () {
 
    let host = server.address().address
    let port = server.address().port
  
    console.log("App listening at http://%s:%s", host, port);
  })

