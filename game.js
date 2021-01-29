let gamePattern = [];

let buttonColours = ["red", "yellow", "green","blue"];


function nextSequence(){
  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour);

  $("#"+ randomChosenColour).fadeOut(250).fadeIn(250);

  let audio = new Audio('./sounds/'+randomChosenColour+'.mp3');
  audio.play();
}

$("button").click( function(event){
  let userChosenColour = event.attr("id")
  console.log(userChosenColour);
})
