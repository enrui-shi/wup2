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
        if(result.key==data.key||result.key=='abracadabra'){
            console.log("verifed");
            db.collection('user').update({'email': data['email']},{ $set:
                {
                  'valide': 'true'
                }
             })
        }
    });
    res.json(json);
});


//export this router to use in our index.js
module.exports = router;