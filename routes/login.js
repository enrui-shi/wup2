var express = require('express');

var router = express.Router();

router.post('/',function(req,res){
    console.log(req.session);
    console.log(req.body);
    res.json({ status:'OK'})
    res.send('login');
    //res.sendFile(path.join(__dirname+'/html/index.html'));
})

//export this router to use in our index.js
module.exports = router;