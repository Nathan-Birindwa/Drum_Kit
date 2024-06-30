let btn = document.querySelectorAll(".drum").length;

for (let i = 0; i <= btn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let Press_Event = this.innerHTML;
    let audio;
    let Keyboard_Event;
    play_Sound(Press_Event);
  });
  document.addEventListener("keypress", function (e) {
    Keyboard_Event = e.key;
    play_Sound(Keyboard_Event);
  });
}

function play_Sound(Press_Event, Keyboard_Event) {
  switch (Press_Event || Keyboard_Event) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("/sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("/sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("/sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("/sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("/sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("/sounds/tom-4.mp3");
      audio.play();
      break;

    default:
  }
}
