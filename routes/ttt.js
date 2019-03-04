var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',function(req,res){
    //res.send('GET route on things.');
    //console.log(req.session);
    if(req.session.status == 'online'){
        res.sendFile(path.join(__dirname+'/..'+'/html/ttt.html'));
    }else{
        res.redirect('/');
    }
})

router.post('/',jsonParser,function(req,res){
    data = req.body;
});

//export this router to use in our index.js
module.exports = router;