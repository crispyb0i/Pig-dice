function randomize() {
  return Math.ceil(Math.random()*6);
}

function Player(turnTotal, total) {
  this.turnTotal = turnTotal;
  this.total = total;
}// end constructor

var player1 = new Player(0, 0);
var player2 = new Player(0, 0);
var player1Turn = true;
var player2Turn = false;

// define roll prototype
Player.prototype.roll = function(randomNum) {
  if (randomNum === 1) {
    this.turnTotal = 0
    player1Turn = !player1Turn;
    player2Turn = !player2Turn;
    if(player1Turn===true){
      $(".P2").removeClass("myTurn");
      $(".P1").addClass("myTurn");
    }
    if(player2Turn===true){
      $(".P1").removeClass("myTurn");
      $(".P2").addClass("myTurn");
    }
  }
  else {
    this.turnTotal += randomNum;
  }
}// end roll prototype
// roll again
$(function() {
  $("#hit").click(function(){
    if (friendMode===true){
      if (player1Turn===true) {
        player2.turnTotal = 0;
        randomNum = randomize();
        $('#player1-history').append("<li>" + randomNum + "</li>");
        player1.roll(randomNum);
        $("#player1-turnTotal").text(player1.turnTotal);
      }
      if (player2Turn===true) {
        player1.turnTotal = 0;
        randomNum = randomize();
        $('#player2-history').append("<li>" + randomNum + "</li>");
        player2.roll(randomNum);
        $("#player2-turnTotal").text(player2.turnTotal);
      }
    }
  });
    // pass turn
  $("#hold").click(function(){
    if(player1Turn===true && friendMode===true){
      $(".P1").removeClass("myTurn");
      $(".P2").addClass("myTurn");
      player1.total+=player1.turnTotal;
      player1.turnTotal = 0;
      $("#player1-turnTotal").text(player1.turnTotal);
      $('#player1-total').text(player1.total);
      player2.turnTotal = 0;
      console.log(player1Turn,player2Turn)
      if(player1.total>=100){
        alert("Player 1 Wins!")
        $("#hit").hide();
        $("#hold").hide();
        $("#again").show();
      }
    }
    if(player2Turn===true && friendMode===true){
      $(".P2").removeClass("myTurn");
      $(".P1").addClass("myTurn");
      player2.total+=player2.turnTotal;
      player2.turnTotal = 0;
      $("#player2-turnTotal").text(player2.turnTotal);
      $('#player2-total').text(player2.total);
      player1.turnTotal = 0;
      if(player2.total>=100){
        alert("Player 2 Wins!")
        $("#hit").hide();
        $("#hold").hide();
        $("#again").show();
      }
    }
    player1Turn = !player1Turn;
    player2Turn = !player2Turn;
  });
});
