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
  
})

// if (userClickedPattern === gamePattern){
//   nextSequence()
// } else {
//   $('h1').text(`Game Over`) ;
// }

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
