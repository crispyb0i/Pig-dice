//back-end
function randomize() {
  return Math.ceil(Math.random()*6);
}
var soloMode = false;
var friendMode = false;
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
    if (human.total - computer.total > 5 && human.total - computer.total <15) {
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
}// end computer turn function
// constructor function
function Player(turnTotal, total) {
  this.turnTotal = turnTotal;
  this.total = total;
}// end constructor
// define instances
var human = new Player(0, 0);
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
    soloMode = true;
    friendMode = false;
    $("#intro").hide();
    $("#results").show();
    $(".solo").show();
    $("button").show();
    $("#again").hide();
  })


  // select 2 player game
  $("#double").click(function(){
    soloMode = false;
    friendMode = true;
    $("#intro").hide();
    $(".double").show();
    $("#double").show();
    $("button").show();
    $("#again").hide();
    $(".P2").removeClass("myTurn");
    $(".P1").addClass("myTurn");
  })
  // roll again
  $("#hit").click(function(){
    if(soloMode===true){
      computer.turnTotal = 0;
      randomNum = randomize();
      $('#player-history').append("<li>" + randomNum + "</li>");
      human.roll(randomNum);
      $("#player-turnTotal").text(human.turnTotal);
    }
  });
    // pass turn
    $("#hold").click(function(){
      console.log(player1Turn)
      if(soloMode===true){
        human.total+=human.turnTotal;
        human.turnTotal = 0;
        $("#player-turnTotal").text(human.turnTotal);
        $('#player-total').text(human.total);
        console.log(human.total,human.turnTotal)
        computer.turnTotal = 0;
        if(human.total>=100){
          alert("You Win!")
          $("#hit").hide();
          $("#hold").hide();
          $("#again").show();
        }else{
          alert("Computer's turn");
          computerTurn();
        }
      }
    });

  // play again
  $("#again").click(function(){
    $("#results").hide();
    $("#intro").show();
    $("#again").hide();
    $("ul").empty();
    $("span").empty();
    human.total=0;
    computer.total=0;
    human.turnTotal=0
    computer.turnTotal=0
  });
});
