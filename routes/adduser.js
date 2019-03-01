var express = require('express');
var router = express.Router();

router.post('/',function(req,res){
    console.log(req.body);
    res.json({ status:'OK'})
    res.send('adduser');
})

//export this router to use in our index.js
module.exports = router;