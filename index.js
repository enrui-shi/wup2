const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'html/index.html'));
})

app.listen(port,'0.0.0.0', () => {
    return console.log(`Example app listening on port ${port}!`);
})