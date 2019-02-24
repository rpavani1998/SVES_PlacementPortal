var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var passport = require('passport');

// app.use(passport.initialize());
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

require('./route/student.route.js')(app);
require('./route/user.route.js')(app);
require('./route/company.route.js')(app);
require('./route/addjob.route.js')(app);  
require('./route/jobtype.route.js')(app);  


const db = require('./config/db.config.js');

var server = app.listen(4000, function () {
 
    let host = server.address().address
    let port = server.address().port
  
    console.log("App listening at http://%s:%s", host, port);
  })

