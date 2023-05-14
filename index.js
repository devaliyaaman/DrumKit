//Detecting ButtonCLick
var nOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < nOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting Keyboard Press
document.addEventListener("keypress", function (Event) {
  makeSound(Event.key);
  buttonAnimation(Event.key);
});

//Playing Sound
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./snare.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}
function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 500);
}
