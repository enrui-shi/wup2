var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var router = express.Router();
const path = require('path');

router.post('/',jsonParser,function(req,res){
    data = req.body;
    json = {status:'OK'};
    console.log(data);
    console.log(data.email);
    console.log(data['key']);
    var db = req.app.locals.db;
    db.collection('user').find({ 'email': data['email'] 
    }).toArray(function(err, result){
        console.log("inside callback");
        console.log(data);
        console.log("result");
        console.log(result);
        json = {status:"ERROR"};
    });
    res.json(json);
});


//export this router to use in our index.js
module.exports = router;