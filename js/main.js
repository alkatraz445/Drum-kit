window.onload = function(e) {
  playSound(e);
  removeTransition(e);
};

//Sound and transition

window.addEventListener(
  "keydown",
  (playSound = e => {
    //Sound
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    //Start transition
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
  })
);

//End transition

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
