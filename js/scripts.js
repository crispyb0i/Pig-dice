function randomize() {
  return Math.ceil(Math.random()*6);
}

function computerTurn(){
  computerRoll1=randomize();
  computerRoll2=randomize();
  computerRoll3=randomize();
  if(computerRoll1===1){
    $("#computer-history").append("<li>"+computerRoll1 + "</li>");
    computer.turnTotal = 0;
  }
  if(computerRoll1 !== 1 && computerRoll2 !==1){
    $("#computer-history").append("<li>"+computerRoll1 + "</li>");
    $("#computer-history").append("<li>"+computerRoll2 + "</li>");
    computer.turnTotal = computerRoll1 + computerRoll2;
    computer.total += computer.turnTotal;
    $("#computer-turnTotal").text(computer.turnTotal);
    if (player1.total - computer.total > 5 && player1.total - computer.total <15) {
      computerTurn();
    }
    $("#computer-total").text(computer.total);
    console.log("computer",computer);
  }
  if (computer.total >= 100) {
    alert("You lost to a computer!");
    $("#hit").hide();
    $("#hold").hide();
    $("#again").show();
    player1.total=0;
    computer.total=0;
  }
}

var player1Total = 0;
var player2Total = 0;
var computerRoll1 =0;
var computerRoll2 = 0;

function Player(turnTotal, total) {
  this.turnTotal = turnTotal;
  this.total = total;
}
var player1 = new Player(0, 0);
var computer = new Player(0, 0);
Player.prototype.roll = function(randomNum) {
  if (randomNum === 1) {
    this.turnTotal = 0
    alert("Computer's turn");
    computerTurn();
  }
  else {
    this.turnTotal += randomNum;
  }
}



$("document").ready(function(){
  $("#solo").click(function(){
    $("#intro").hide();
    $("#results").show();
    $(".solo").show();
    $("button").show();
    $("#again").hide();
  })
  $("#double").click(function(){
    $("#intro").hide();
    $(".double").show();
    $("#double").show();
    $("button").show();
  })
  $("#hit").click(function(){
    randomNum = randomize();
    $('#player-history').append("<li>" + randomNum + "</li>");
    player1.roll(randomNum);
    $("#player-turnTotal").text(player1.turnTotal);
    console.log(player1,randomNum)
  });
  $("#hold").click(function(){

    player1.total+=player1.turnTotal;
    player1.turnTotal = 0;
    $("#player-turnTotal").text(player1.turnTotal);
    $('#player-total').text(player1.total);

    if(player1.total>=100){
      alert("You Win!")
      $("#hit").hide();
      $("#hold").hide();
      $("#again").show();
      player1.total=0;
      computer.total=0;
    }else{
      alert("Computer's turn");
      computerTurn();
    }
  })
  $("#again").click(function(){
    $("#results").hide();
    $("#intro").show();
    $("#again").hide();
    $("ul").empty();
    $("span").empty();
  });
});
