$(document).ready(function() {
    var Random=Math.floor(Math.random()*100+1)

    $('#randomNumber').text(Random);
    var num1;
    var num2;
    var num3;
    var num4;
  var num1= Math.floor(Math.random()*11+1);
  console.log(num1);
  var num2= Math.floor(Math.random()*11+1);
  console.log(num2);
  var num3= Math.floor(Math.random()*11+1);
  console.log(num3);
  var num4= Math.floor(Math.random()*11+1);
  console.log(num4);

  var totalScore = 0;
  var wins = 0;
  var losses = 0;

$('#userWins').text(wins);
$('#userLosses').text(losses);

function reset(){
    Random=Math.floor(Math.random()*100+1);
    console.log(Random);
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    totalScore= 0;
    $('#finalTotal').text(totalScore);
    } 

function winner() {
alert("You won!");
  wins++; 
  $('#userWins').text(wins);
  reset();
};

function loser(){
alert ("You lose!");
  losses++;
  $('#userLosses').text(losses);
  reset();
}

  $('#one').on('click', function(){
  
    totalScore = totalScore + num1;
    console.log("New userTotal= " + totalScore);
    $('#finalTotal').text(totalScore); 
          
        if (totalScore == Random){
          winner();
        }
       if ( totalScore > Random){
          loser();
        }   
  }); 

  $('#two').on('click', function(){
    totalScore = totalScore + num2;
    console.log("New userTotal= " + totalScore);
    $('#finalTotal').text(totalScore); 
        if (totalScore == Random){
          winner();
        }
        if ( totalScore > Random){
          loser();
        } 
  });
  $('#three').on('click', function(){
    totalScore = totalScore + num3;
    console.log("New userTotal= " + totalScore);
    $('#finalTotal').text(totalScore);

          if (totalScore == Random){
          winner();
        }
        if ( totalScore > Random){
          loser();
        } 
  });  
  $('#four').on('click', function(){
    totalScore = totalScore+ num4;
    console.log("New userTotal= " + totalScore);
    $('#finalTotal').text(totalScore); 
      
          if (totalScore == Random){
          winner();
        }
        if ( totalScore > Random){
          loser();
        }
  });   

})