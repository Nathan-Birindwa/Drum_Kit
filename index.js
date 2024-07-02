let btn = document.querySelectorAll(".drum").length;

for (let i = 0; i < btn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let Press_Event = this.innerHTML;
    let audio;
    let Keyboard_Event;
    play_Sound(Press_Event);
    button_Animation(Press_Event);
  });
}
document.addEventListener("keydown", function (e) {
  Keyboard_Event = e.key;
  play_Sound(e.key);
  button_Animation(Keyboard_Event);
});

function play_Sound(Press_Event, Keyboard_Event) {
  switch (Press_Event || Keyboard_Event) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("/sounds/kick-bass.mp3");
      break;

    case "s":
      audio = new Audio("/sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("/sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("/sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("/sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("/sounds/tom-4.mp3");
      break;

    default:
  }
  if (audio) {
    audio.play();
  }
}

function button_Animation(keyboard_Event, press_Event) {
  this.keyboard_Event = keyboard_Event;
  this.press_Event = press_Event;
  let key_pressed = this.keyboard_Event || this.press_Event;
  let active_button = document.querySelector("." + key_pressed);
  active_button.classList.add("pressed");
  // Removing the classList after 2s
  setTimeout(function () {
    active_button.classList.remove("pressed");
  }, 200);
}
