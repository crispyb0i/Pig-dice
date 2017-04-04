var player1Total = 0;
var player2Total = 0;

function randomize() {
  return Math.ceil(Math.random()*6);
}

$("document").ready(function(){
  $("#solo").click(function(){
    $("#intro").hide();
    $(".solo").show();
    $("button").show();
    console.log("hello")
  })
  $("#double").click(function(){
    $("#intro").hide();
    $(".double").show();
    $("#double").show();
    $("button").show();
    console.log("hello")
  })
  $("#hit").click(function(){
    var randomNum = randomize();


    if (randomNum!==1){

      console.log(player1Total,turnTotal);
      turnTotal+=randomNum
      player1Total += turnTotal;
      $("#player-total").text(player1Total);
      $("#player-history").append("<li>" + randomNum + "</li>");
      var turnTotal = 0;
    }
    else {
      player1Total-=turnTotal;
      $("#player-total").text(player1Total);
      alert("computer's turn");
      var computerRoll1 = randomize();
      var computerRoll2 = randomize();
      if(computerRoll1!==1 && computerRoll2!==1) {
        player2Total+=(computerRoll1+computerRoll2)
        $("#computer-total").text(player2Total);
        $("#computer-history").append("<li>" + computerRoll1 + "</li><li>" + computerRoll2 + "</li>");
      }else{
        alert("Your turn!")
      }
    }
  });
});
