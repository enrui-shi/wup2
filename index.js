const express = require('express')
const app = express()
const path = require('path');
const port = 3000
var login = require('./routes/login.js');

app.get('/',function(req,res){
    res.send('GET route on things.');
    //res.sendFile(path.join(__dirname+'/html/index.html'));
})
app.use('/login.js', login);
app.listen(port,'0.0.0.0', () => {
    return console.log(`Example app listening on port ${port}!`);
})