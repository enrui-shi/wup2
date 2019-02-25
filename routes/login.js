var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('GET route on things.');
    //res.sendFile(path.join(__dirname+'/html/index.html'));
})

//export this router to use in our index.js
module.exports = router;