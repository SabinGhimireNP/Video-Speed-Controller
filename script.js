const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  bar.style.height = height;
  const playbackspeed = percent * (max - min) + min;
  bar.textContent = playbackspeed.toFixed(1) + "x";
  video.playbackRate = playbackspeed;
//   console.log([video]);
});
