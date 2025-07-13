const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

let pressed = false;

function playbackRate(e) {
  if (!pressed) return;

  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const playbackspeed = percent * (max - min) + min;
  const height = Math.round(percent * 100) + "%";

  bar.style.height = height;
  bar.textContent = playbackspeed.toFixed(1) + "x";
  video.playbackRate = playbackspeed;
}
speed.addEventListener("mousemove", playbackRate);

speed.addEventListener("mousedown", () => (pressed = true));

speed.addEventListener("mouseup", () => (pressed = false));

speed.addEventListener("mouseleave", () => (pressed = false));
