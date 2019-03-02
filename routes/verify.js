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
    var cursor = db.collection('user').find(
        { 'email': data['email'] 
        }).then( data => {
            curosr = data.toArray();
            console.log(cursor);
    });
    res.json({ status:'OK'});
});


//export this router to use in our index.js
module.exports = router;