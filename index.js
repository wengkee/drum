function playSound(instrument) {
  var audio = new Audio("sounds/" + instrument + ".mp3");
  audio.play();
}

function handleInstrument(key) {

  switch (key) {
    case "w":
      playSound("tom-1");
      break;

    case "a":
      playSound("tom-2");
      break;

    case "s":
      playSound("tom-3");
      break;

    case "d":
      playSound("tom-4");
      break;

    case "j":
      playSound("snare");
      break;

    case "k":
      playSound("crash");
      break;

    case "l":
      playSound("kick-bass");
      break;

    default:
      console.log(key);
  }


  buttonAnimation(key);
}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    handleInstrument(this.innerHTML);
  });
}

document.addEventListener("keypress", function(e) {
  handleInstrument(e.key);
  buttonAnimation(e.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
