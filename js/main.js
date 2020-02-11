window.addEventListener("keydown", function(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  console.log(audio);
  audio.play();
});
