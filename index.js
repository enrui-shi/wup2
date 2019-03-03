const express = require('express');

const app = express();
const path = require('path');
const port = 3000;
const MongoClient = require('mongodb').MongoClient;
//session
var cookieSession = require('cookie-session');
//const
const mongo_address = 'mongodb://130.245.171.133:27017';
//session
app.use(cookieSession({
    name: 'session',
    keys: ['lalala'],
  }))

//routes
var login = require('./routes/login.js');
var adduser = require('./routes/adduser.js');
var verify = require('./routes/verify.js');
var logout = require('./routes/logout.js');
var ttt = require('./routes/ttt.js');
//add api
app.use('/login', login);
app.use('/adduser', adduser);
app.use('/verify', verify);
app.use('/logout', logout);
app.use('/ttt',ttt);
//file
app.use("/style", express.static(__dirname + '/style'));
app.use("/script", express.static(__dirname + '/script'));


app.get('/',function(req,res){
    //res.send('GET route on things.');
    res.sendFile(path.join(__dirname+'/html/index.html'));
})

// start app,

MongoClient.connect(mongo_address, (err, client) => {
    // ... start the server
    if(err){
        console.log(err);
    }else{
        console.log("success connet to db");
    }
    db = client.db('wup2');
    //console.log(db);
    app.locals.db = db;
    app.listen(port,'0.0.0.0', () => {
        return console.log(`App listening on port ${port}!`);
    })
  })
  
