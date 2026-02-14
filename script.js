// elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const yesBtn = document.querySelector(".yes-btn");
const video = document.getElementById("loveVideo");
const message = document.getElementById("loveMessage");

// open envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
});

// YES clicked
yesBtn.addEventListener("click", () => {

  // hide bouquet, buttons, question
  document.querySelector(".bouquet").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".question").style.display = "none";

  // show video + message
  video.style.display = "block";
  message.style.display = "block";

  // play with sound
  video.muted = false;
  video.volume = 1;
  video.play();
});
