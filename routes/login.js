var express = require('express');
var router = express.Router();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
})

//export this router to use in our index.js
module.exports = router;