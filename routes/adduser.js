var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/',jsonParser,function(req,res){
    var db = req.app.locals.db;
    db.User.insert(req.body);
    console.log(req.body);
    res.json({ status:'OK'})
    //res.send('adduser');
})

//export this router to use in our index.js
module.exports = router;