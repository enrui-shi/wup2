var express = require('express');

var router = express.Router();

router.post('/',function(req,res){
    data = req.body;
    var db = req.app.locals.db;
    const cursor = db.collection('user').find({ email: data['email'] });
    console.log(cursor);
    res.json({ status:'OK'});
});


//export this router to use in our index.js
module.exports = router;