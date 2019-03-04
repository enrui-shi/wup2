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
    if(req.session.status == 'online' && req.session.current_user){
        res.sendFile(path.join(__dirname+'/..'+'/html/ttt.html'));
    }else{
        req.session = null;
        res.redirect('/');
    }
})

router.post('/play',jsonParser,function(req,res){
    if(req.session==null){
      res.redirect('/');
    }else{
    data = req.body;
    console.log(data);
    move = data.move;
    console.log("sesstion: ")
    console.log(req.session);
    db.collection('user').find({ 'username': req.session.current_user 
    }).toArray(function(err, result){
        console.log(result);
        result = result[0];
        console.log(result);
        grid = result.current_grid;
        json = play(move,grid);
        if(json.winner==null){
            db.collection('user').update({'username': req.session.current_user},{ $set:
                {
                'current_grid': json.grid
                }
            })
        }else{
            //store game to db
            start_date = Date();
            username = req.session.current_user;
            id = username + start_date;
            grid = json.grid;
            winner = json.winner;
            game = {'id':id , 'start_date':start_date, 'username':username, 'grid':grid, 'winner':winner};
            db.collection("games").insertOne(game, function(err, a) {
                if (err) {
                    console.log("error to add game to games");
                }else{
                    console.log(game.id+" add to games");
                }
            });
            //reset grid
            db.collection('user').update({'username': req.session.current_user},{ $set:
                {
                'current_grid': [" ", " ", " ", " ", " ", " ", " ", " ", " "]
                }
            })
        }
        console.log("game send back is: "+json.grid);
        res.json(json);
    });
  }
});
router.get('/current_game',function(req,res){
    db.collection('user').find({ 'username': req.session.current_user 
    }).toArray(function(err, result){
        result = result[0];
        res.json({'grid':result.current_grid});
    });
});

//
function play (move,grid){
    if( move == null){
      return {'grid':grid,'winner':null};
    }else{
      if(grid[move]!= ' '){
        return {'grid':grid,'winner':null};
      }
      grid[move] = "X";
      var counter = 0;
      for(i = 0;i<9;i++){
        if(grid[i]==' '){
          counter++;
        }
      }
      if(counter==0){
        return {'grid':grid,'winner':' '}
      }
      var winner = check(grid);
      if(winner ==null){
        grid = mv(grid);
      }
      winner = check(grid);
      return {'grid':grid,'winner':winner};
    }
  }
  function check(grid){
    if(grid[0]==grid[1]&&grid[1]==grid[2]){
      if(grid[0]!=' '){  return grid[0];}
    }
    if(grid[3]==grid[4]&&grid[4]==grid[5]){
      if(grid[3]!=' '){return grid[3];}
    }
    if(grid[6]==grid[7]&&grid[7]==grid[8]){
      if(grid[6]!=' '){return grid[6];}
    }
  
    if(grid[0]==grid[3]&&grid[3]==grid[6]){
      if(grid[6]!=' '){return grid[6];}
    }
    if(grid[1]==grid[4]&&grid[4]==grid[7]){
      if(grid[7]!=' '){return grid[7];}
    }
    if(grid[2]==grid[5]&&grid[5]==grid[8]){
      if(grid[2]!=' '){return grid[2];}
    }
  
    if(grid[0]==grid[4]&&grid[4]==grid[8]){
      if(grid[8]!=' '){return grid[8];}
    }
    if(grid[2]==grid[4]&&grid[4]==grid[6]){
      if(grid[6]!=' '){return grid[6];}
    } 
    return null; 
  }
  function mv(grid){
    var O = checkPos('O',grid);
    if (O != '9'){
      grid[O] = 'O';
      return grid
    }
    var X = checkPos('X',grid);
    if(X!=9){
      grid[X] = 'O'
      return grid
    }
    
    if(grid[4] ==' '){
      grid[4]='O'
      return grid
    }
    for(i = 0;i<9;i++){
      if(grid[i]== ' '){
        grid[i]='O'
        return grid
      }
    }
    return grid
  }
  
  function checkPos(turn,grid){
    for(i = 0;i<9;i++){
      //console.log(i)
      //console.log(grid[i])
      if(grid[i]==turn){
        if (i ==0||i==3||i ==6){
          if(grid[i+1]==turn&&grid[i+2]==' '){ return i+2}
          if(grid[i+2]==turn&&grid[i+1]==' '){ return i+1}
        }
        if(i ==1||i==4||i==7){
          if(grid[i-1]==' '&&grid[i+1]==turn){ return i-1}
        }
        if (i ==0||i==1||i ==2){
          if(grid[i+3]==turn&&grid[i+6]==' '){ return i+6}
          if(grid[i+6]==turn&&grid[i+3]==' '){ return i+3}
        }
        if(i ==3||i==4||i==5){
          if(grid[i-3]==' '&&grid[i+3]==turn){ return i-3}
        }
        if(i ==0){
          if(grid[4]== turn &&grid[8]==' '){return 8}
          if(grid[8]== turn &&grid[4]==' '){return 4}
        }
        if(i == 4){
          if(grid[8]== turn &&grid[0]==' '){return 0}
          if(grid[6]== turn &&grid[2]==' '){return 2}
        }
        if(i ==2){
          if(grid[4]== turn &&grid[6]==' '){return 6}
          if(grid[6]== turn &&grid[4]==' '){return 4}
        }
      }
    }
  
    return 9;
  
  }
//export this router to use in our index.js
module.exports = router;