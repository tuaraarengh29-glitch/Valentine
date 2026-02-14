// elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const yesBtn = document.querySelector(".yes-btn");
const video = document.getElementById("loveVideo");

// open envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
});

// YES clicked → play video
yesBtn.addEventListener("click", () => {
  letter.style.display = "none";
  video.style.display = "block";

  video.muted = false;
  video.volume = 1;

  video.play().catch(() => {
    alert("Tap screen once for sound 🔊");
  });
});
