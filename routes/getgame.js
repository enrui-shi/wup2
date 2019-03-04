var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/',jsonParser,function(req,res){
    if(req.session == null){
        res.json({'status':"ERROR"});
    }else{
        data = req.body;
        db.collection('games').find({ 'id': data.id
            }).toArray(function(err, result){
                result = result[0];
                json = {'status':'OK', 'grid': result.grid, 'winner':result.winner}
                res.json(json);
            });
    }
});





//export this router to use in our index.js
module.exports = router;