var grid = [" ", " ", " ",
            " ", " ", " ",
            " ", " ", " "];
var winner = "";

$(document).ready(function(){
    $(".cell").click(function(){
      if (winner == ""){
      $(this).text("X");
      grid[$(this).attr("id")]="X";
      sendJson();
      }
    });
  });

  function sendJson() {
    $.ajax({
      url:"/ttt/play",
      type:"POST",
      data:JSON.stringify({grid:grid}),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data){
      }
    })
   
}