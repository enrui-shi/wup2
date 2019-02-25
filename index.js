const express = require('express')
const app = express()
const port = 3000
const html_path = '/html'

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+html_path+'/index.html'));
})

app.listen(port,'0.0.0.0', () => {
    return console.log(`Example app listening on port ${port}!`);
})