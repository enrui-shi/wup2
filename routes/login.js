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
    json = {'status':"OK"};
    // 
    db.collection('user').find({ 'username': data['username'] 
    }).toArray(function(err, result){
        if(result.length==1){
            result = result[0];
            if(result.password == data.password && result.valide == 'true'){
                //login
                req.session.current_user = result.username;
                req.session.status = 'online';
                console.log(req.session);
            }else{
                console.log(result.username+'false to login');
                json.status = 'ERROR'
            }
        }else{
            console.log(result.length);
            json.status = 'ERROR';
        }
        res.json(json);
    });
})

//export this router to use in our index.js
module.exports = router;