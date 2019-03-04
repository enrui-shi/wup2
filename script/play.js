var winner = null;

$(document).ready(function(){
    get_grid();
    $('#fresh').click(function(){
        winner = null;
        $("#winner").text("");
        get_grid();
    });
    $(".cell").click(function(){
      if (winner == null){
      $(this).text("X");
      //grid[$(this).attr("id")]="X";
      move = $(this).attr("id")
      console.log(move);
      sendJson();
      }
    });
  });

  function sendJson() {
    $.ajax({
      url:"/ttt/play",
      type:"POST",
      data:JSON.stringify({'move' : move}),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data){
          winner = data.winner;
          grid = data.grid;
          if(winner!=null){
            $("#winner").text("Winner is: " + data.winner);
          }
          for(var i=0; i<9;i++){
            $('#' + i).text(grid[i]);
        }
      }
    })
    }
function get_grid(){
    console.log("download current grid from db");
    $.ajax({
        url:"/ttt/current_game",
        type:"GET",
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data){
            grid = data.grid;
            for(var i=0; i<9;i++){
                $('#' + i).text(grid[i]);
            }
        }
      })
}