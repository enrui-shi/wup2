var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var router = express.Router();
const path = require('path');

router.post('/',jsonParser,function(req,res){
    data = req.body;
    console.log(data);
    console.log(data.email);
    console.log(data['key']);
    var db = req.app.locals.db;
    db.collection('user').find({ 'email': data['email'] },function(error, cursor){
        console.log("get cursor");
        console.log(cursor);
        cursor.forEach(function(error,doc){
                console.log(doc);
        });
    });
    res.json({ status:'OK'});
});


//export this router to use in our index.js
module.exports = router;