var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var router = express.Router();
const path = require('path');

router.post('/',jsonParser,function(req,res){
    data = req.body;
    console.log(data);
    var db = req.app.locals.db;
    const cursor = db.collection('user').find({ 'email': data['email'] });
    console.log(cursor);
    res.json({ status:'OK'});
});


//export this router to use in our index.js
module.exports = router;