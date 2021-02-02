let gamePattern = [];

let buttonColours = ["red", "yellow", "green","blue"];
let userClickedPattern =[]

let level = 0;
let firstClick = false
$(document).keydown( function(){

  if (!firstClick){
    $('h1').text(`Level ${level}`) ;
    nextSequence();

    firstClick = true;
  }
  
} 
)
  
  function nextSequence(){

  userClickedPattern = [];
  level++
  $('h1').text(`Level ${level}`) ;

  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour);

  $("#"+ randomChosenColour).fadeOut(250).fadeIn(250);
  playSound(randomChosenColour)
  animateClick(randomChosenColour)
  
}


$(".btn").click( function(){
  let userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour)
  animateClick(userChosenColour)
  checkAnswer(userClickedPattern.length-1)
})

function checkAnswer(currentLevel){

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

    if(userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
          nextSequence();
        }, 1000);
  }
  } else {  
    playSound("wrong")
    $('h1').text(`Game Over, Press any key to Restart`) ;
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    }, 200);
    startOver();
  }
}

function playSound(name){
let audio = new Audio('./sounds/'+name+'.mp3');
  audio.play();
}

function animateClick(currentColour){
  $('#'+currentColour).addClass("pressed")

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver(){
  firstClick = false;
  level=0;
  gamePattern = [];
}