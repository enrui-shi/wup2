var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');

// create application/json parser
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/',jsonParser,function(req,res){
        console.log(req.session.current_user+" logout");
        req.session = null;
        res.json({'status':'OK'});
});
router.get('/',jsonParser,function(req,res){
        console.log(req.session.current_user+" logout");
        req.session = null;
        res.json({'status':'OK'});
});

//export this router to use in our index.js
module.exports = router;