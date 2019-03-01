const express = require('express');

const app = express();
const path = require('path');
const port = 3000;
const MongoClient = require('mongodb').MongoClient;

//routes
var login = require('./routes/login.js');
var adduser = require('./routes/adduser.js');

//file
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/script", express.static(__dirname + '/script'));

app.get('/',function(req,res){
    //res.send('GET route on things.');
    res.sendFile(path.join(__dirname+'/html/index.html'));
})

//add api
app.use('/login', login);
app.use('/adduser', adduser);

// start app

MongoClient.connect('mongodb://130.245.171.133:27017', (err, client) => {
    // ... start the server
    db = client.db('wup2')
    app.listen(port,'0.0.0.0', () => {
        return console.log(`App listening on port ${port}!`);
    })
  })
  
