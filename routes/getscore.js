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
            var hum = 0;
            var cwp2 = 0;
            var tie = 0;
            for(i=0;i<len;i++){
                var win = result[i].winner
                if(win == 'O'){
                    cwp2++;
                }
                if(win == 'X'){
                    hum++;
                }
                if(win == 'Tie'){
                    tie++;
                }
            }
            res.json({'status':"OK",'human':hum,'wopr':cwp2,'tie':tie})            
        })
    }else{
        res.json({'status':"ERROR"})
    }
});

module.exports = router;