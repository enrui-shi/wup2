var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const path = require('path');


router.post("/",function(req,res){
    var user = req.session.current_user 
    if(req.session!= null){
        db.collection('games').find({ 'username': user}).toArray(function(err, result){
            var len = result.length
            var games = []
            for(i=0;i<len;i++){
                game[i] = {'id':result[i].id,'start_date':result[i].start_date}
            }
            res.json({'status':"OK",'games':games})            
        })
    }else{
        res.json({'status':"ERROR"})
    }
});

module.exports = router;