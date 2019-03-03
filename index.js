const express = require('express');

const app = express();
const path = require('path');
const port = 3000;
const MongoClient = require('mongodb').MongoClient;
//session
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//const
const mongo_address = 'mongodb://130.245.171.133:27017';

//routes
var login = require('./routes/login.js');
var adduser = require('./routes/adduser.js');
var verify = require('./routes/verify.js');

//add api
app.use('/login', login);
app.use('/adduser', adduser);
app.use('/verify', verify);

//file
app.use("/styles", express.static(__dirname + '/styles'));
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
    //set up session 
    app.use(session({
        secret: 'lalala',
        store: new MongoStore({ client: client })
    }));
    //console.log(db);
    app.locals.db = db;
    app.listen(port,'0.0.0.0', () => {
        return console.log(`App listening on port ${port}!`);
    })
  })
  
