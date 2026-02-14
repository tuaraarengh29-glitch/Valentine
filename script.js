// elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const video = document.getElementById("loveVideo");
const message = document.getElementById("loveMessage");


// open envelope
envelope.addEventListener("click", () => {
  envelope.style.display="none";
  letter.style.display="flex";
});


// YES CLICKED
yesBtn.addEventListener("click", () => {

  document.querySelector(".bouquet").style.display="none";
  document.querySelector(".buttons").style.display="none";
  document.querySelector(".question").style.display="none";

  video.style.display="block";
  message.style.display="block";

  video.muted=false;
  video.volume=1;
  video.play();

  launchConfetti();
});


// ===== DRAMATIC NO BUTTON =====

let noClickCount=0;
let yesScale=1;

const noMessages=[
"Are you sure?",
"Please 🥺",
"Think again 😭",
"Don't break my heart 💔",
"Last chance 😢"
];

noBtn.addEventListener("mouseover",moveNo);
noBtn.addEventListener("touchstart",moveNo);

function moveNo(){

// random move
const x=Math.random()*200-100;
const y=Math.random()*200-100;
noBtn.style.transform=`translate(${x}px,${y}px)`;

// change text (image alt)
if(noClickCount<noMessages.length){
noBtn.alt=noMessages[noClickCount];
}

// grow YES button
yesScale+=0.3;
yesBtn.style.transform=`scale(${yesScale})`;

noClickCount++;

// remove NO after many tries
if(noClickCount>6){
noBtn.style.display="none";
}
}


// ===== CONFETTI =====

function launchConfetti(){
for(let i=0;i<80;i++){
const conf=document.createElement("div");
conf.className="confetti";
conf.style.left=Math.random()*100+"vw";
conf.style.background=`hsl(${Math.random()*360},100%,50%)`;
document.body.appendChild(conf);

setTimeout(()=>conf.remove(),3000);
}
}
