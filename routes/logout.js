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
    if(req.body.status=='OK'){
        res.redirect('/');
    }else{
        req.session = null;
        res.json({'status':'OK'})
    }
});

//export this router to use in our index.js
module.exports = router;