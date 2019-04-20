var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
// var passport = require('passport');

// app.use(passport.initialize());
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: ['http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4200'],
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
require('./route/achievement.route.js')(app);  
require('./route/job-type.route')(app);  
require('./route/job-post.route.js')(app); 
require('./route/company.route')(app)
require('./route/competition.route')(app)
// require('./route/editjobpost.route.js')(app); 

let router = require('./route/file.router.js');
app.use('/', router);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var server = app.listen(4000, function () {
 
    let host = server.address().address
    let port = server.address().port
  
    console.log("App listening at http://%s:%s", host, port);
  })

