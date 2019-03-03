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
    res.sendFile(path.join(__dirname+'/..'+'/html/adduser.html'));
});
router.post('/',jsonParser,function(req,res){
    data = req.body;
    data['valide'] = "false";
    data['key'] = Math.floor((Math.random() * 8999) + 1000);
    var db = req.app.locals.db;
    //add user to database
    db.collection("user").insertOne(data, function(err, res) {
        if (err) {
            console.log(err);
        }else{
            console.log("1 document inserted");
            //*************
            var transporter = nodemailer.createTransport({
                //host: 'email.cloud.compas.cs.stonybrook.edu',
                host:'smtp.gmail.com',
                port:465,
                secure:true,
                auth: {
                    user: 'cse356test@gmail.com',
                    pass: 'Cse356lalala'
                }
                // tls:{
                //     //rejectUnauthorized:false
                // }
            });
            var mailOpton = {
                //from:'cse356@email.cloud.compas.cs.stonybrook.edu',
                from: 'cse356test@gmail.com',
                to: data.email,
                subject: "test email",
                text:"123"
            };
        
            transporter.sendMail(mailOpton, function(error, info){
                if (error) {
                  console.log("error is:");
                  console.log(error);
                } 
                  else{console.log('Email sent: ')}
                });
            
            //********** 


        }
      });
    console.log(data);
    res.json({ status:'OK'});
})

//export this router to use in our index.js
module.exports = router;



function sssss(){
    var transporter = nodemailer.createTransport({
        //host: 'email.cloud.compas.cs.stonybrook.edu',
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth: {
            user: 'cse356test@gmail.com',
            pass: 'Cse356lalala'
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    var mailOpton = {
        //from:'cse356@email.cloud.compas.cs.stonybrook.edu',
        from: 'cse356test@gmail.com',
        to: email,
        subject: "test email",
        text:"123"
    };

    transporter.sendMail(mailOpton, function(error, info){
        if (error) {
          console.log("error is:");
          console.log(error);
          res.send ('failed');
        } 
          else{console.log('Email sent: ')}
        });
}