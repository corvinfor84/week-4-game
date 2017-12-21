$( document ).ready(function(){
  var userScore = 0; 
  var wins = 0;
  var loss = 0;

  var randomCpuNum = Math.floor(Math.random()*101+19)

  $('#matchCpuScoreBox').text(randomCpuNum);

  var gem1 = Math.floor(Math.random() * 11 + 1)
  var gem2 = Math.floor(Math.random() * 11 + 1)
  var gem3 = Math.floor(Math.random() * 11 + 1)
  var gem4 = Math.floor(Math.random() * 11 + 1)
 
function reset(){
      randomCpuNum = Math.floor(Math.random()*101+19);

      $('#matchCpuScoreBox').text(randomCpuNum);
     var gem1 = Math.floor(Math.random() * 11 + 1)
  	 var gem2 = Math.floor(Math.random() * 11 + 1)
     var gem3 = Math.floor(Math.random() * 11 + 1)
     var gem4 = Math.floor(Math.random() * 11 + 1)
      userScore = 0;
      $('#finalTotal').text(userScore);
      } 

function toWinner(){
  wins++; 
  $('#win').text(wins);
  reset();
}

function toLoser(){
$('#message').text('loser');
  loss++;
  $('#loss').text(loss);
  reset()
}

  $('#crystal-1').click(function(){
    userScore = userScore + gem1;
    $('#display-user-score').text(userScore); 

        if (userScore == randomCpuNum){
          		toWinner();
        }
        else if ( userScore > randomCpuNum){
          		toLoser();
        }   
  })  
  $('#crystal-2').click(function(){
    userScore = userScore + gem2;
    $('#display-user-score').text(userScore); 
        if (userScore == randomCpuNum){
          		toWinner();
        }
        else if ( userScore > randomCpuNum){
          		toLoser();
        } 
  })  
  $('#crystal-3').click(function(){
    userScore = userScore + gem3;
    $('#display-user-score').text(userScore);

          if (userScore == randomCpuNum){
          		toWinner();
        }
        else if ( userScore > randomCpuNum){
          		toLoser();
        } 
  })  
  $('#crystal-4').click(function(){
    userScore = userScore + gem4;
    $('#display-user-score').text(userScore); 
      
          if (userScore == randomCpuNum){
          		toWinner();
        }
        else if ( userScore > randomCpuNum){
          		toLoser();
        }
  });   
}); 

