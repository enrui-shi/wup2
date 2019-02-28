const express = require('express')
const app = express()
const path = require('path');
const port = 3000
var login = require('./routes/login.js');
app.use("/styles", express.static(__dirname + '/styles'));

app.get('/',function(req,res){
    //res.send('GET route on things.');
    res.sendFile(path.join(__dirname+'/html/index.html'));
})

//add api
app.use('/login', login);


// start app
app.listen(port,'0.0.0.0', () => {
    return console.log(`App listening on port ${port}!`);
})