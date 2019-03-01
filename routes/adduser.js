var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/',jsonParser,function(req,res,next){
    data = req.body;
    data['valide'] = "false";
    var db = req.app.locals.db;
    //add user to database
    db.collection("user").insertOne(data, function(err, res) {
        if (err) {
            console.log(err);
            res.json({ status:'ERROR'});
        }else{
            console.log("1 document inserted");
        }
      });
    console.log(data);
    res.json({ status:'OK'});
    next();
})
router.use(function (req, res) {
    res.redirt('/')
  });

//export this router to use in our index.js
module.exports = router;