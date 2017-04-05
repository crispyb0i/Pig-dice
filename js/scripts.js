//back-end
function randomize() {
  return Math.ceil(Math.random()*6);
}
// function for computer's turn
function computerTurn(){
  computerRoll=randomize();
  $("#computer-history").append("<li>"+computerRoll + "</li>");
  if(computerRoll===1){
    computer.turnTotal = 0;
  }
  else {
    computer.turnTotal += computerRoll;
    if(computer.turnTotal<10){
      computerTurn();
    }
    else {
      computer.total += computer.turnTotal;
      $("#computer-total").text(computer.total);
    }
    if (player1.total - computer.total > 5 && player1.total - computer.total <15) {
      computerTurn();
    }
  }
  $("#computer-turnTotal").text(computer.turnTotal);
  if (computer.total >= 100) {
    alert("You lost to a computer!");
    $("#hit").hide();
    $("#hold").hide();
    $("#again").show();
  }
console.log(computer.turnTotal,computer.total);
}// end computer turn function
// constructor function
function Player(turnTotal, total) {
  this.turnTotal = turnTotal;
  this.total = total;
}// end constructor
// define instances
var player1 = new Player(0, 0);
var computer = new Player(0, 0);
// define roll prototype
Player.prototype.roll = function(randomNum) {
  if (randomNum === 1) {
    this.turnTotal = 0
    alert("Computer's turn");
    computerTurn();
  }
  else {
    this.turnTotal += randomNum;
  }
}// end roll prototype
// front-end
$("document").ready(function(){
  // select one-player game and play against computer
  $("#solo").click(function(){
    $("#intro").hide();
    $("#results").show();
    $(".solo").show();
    $("button").show();
    $("#again").hide();
  })
  // select 2 player game
  $("#double").click(function(){
    $("#intro").hide();
    $(".double").show();
    $("#double").show();
    $("button").show();
  })
  // roll again
  $("#hit").click(function(){
    computer.turnTotal = 0;
    randomNum = randomize();
    $('#player-history').append("<li>" + randomNum + "</li>");
    player1.roll(randomNum);
    $("#player-turnTotal").text(player1.turnTotal);
  });
  // pass turn
  $("#hold").click(function(){
    player1.total+=player1.turnTotal;
    player1.turnTotal = 0;
    $("#player-turnTotal").text(player1.turnTotal);
    $('#player-total').text(player1.total);
    computer.turnTotal = 0;
    if(player1.total>=100){
      alert("You Win!")
      $("#hit").hide();
      $("#hold").hide();
      $("#again").show();
    }else{
      alert("Computer's turn");
      computerTurn();
    }
  })
  // play again
  $("#again").click(function(){
    $("#results").hide();
    $("#intro").show();
    $("#again").hide();
    $("ul").empty();
    $("span").empty();
    player1.total=0;
    computer.total=0;
    player1.turnTotal=0
    computer.turnTotal=0
  });
});
