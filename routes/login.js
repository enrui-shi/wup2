var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/',jsonParser,function(req,res){
    data = req.body;
    // 
    db.collection('user').find({ 'name': data['name'] 
    }).toArray(function(err, result){
        console.log(result.length);
        result = result[0];
        console.log("result:"+result.name);
    });

    req.session.name  = data.name
    res.json({ status:'OK'})
    //res.sendFile(path.join(__dirname+'/html/index.html'));
})

//export this router to use in our index.js
module.exports = router;