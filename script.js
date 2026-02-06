// --------- ELEMENTS ----------
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");
const card = document.querySelector("#page1 .card");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");

// --------- STATE ----------
let noCount = 0;
let musicStarted = false;

// --------- NO BUTTON DODGE ----------
noBtn.addEventListener("mouseenter", () => {
  noCount++;

  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(0, cardRect.width - btnRect.width - 20);
  const maxY = Math.max(0, cardRect.height - btnRect.height - 20);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount % 3 === 0) {
    alert("JUST SAY YES 😤💖");
  }
});

// --------- YES BUTTON ----------
yesBtn.addEventListener("mouseover", () => {
  yesBtn.style.transform = "scale(1.5)";
});

yesBtn.addEventListener("click", () => {
  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }

  launchConfetti();
  setTimeout(() => showPage("pageSecrets"), 800);
});

// --------- PAGE NAV ----------
document.getElementById("heart").onclick = () => showPage("page3");
document.getElementById("storyBtn").onclick = () => showPage("page4");
document.getElementById("backToProposal").addEventListener("click", () => {
  showPage("page1");
});

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// --------- BACKGROUND HEARTS ----------
function spawnBackgroundHearts() {
  const heartsLayer = document.querySelector(".hearts");
  if (!heartsLayer) return;

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "bg-heart";
    heart.innerText = ["💖", "💕", "💗", "💘", "💝"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-40px";
    heart.style.animationDuration = 8 + Math.random() * 6 + "s";
    heartsLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 14000);
  }, 800);
}

document.addEventListener("DOMContentLoaded", spawnBackgroundHearts);

// --------- SECRET HEARTS ----------
const secretPasswords = {
  1: "RoseItIs2002",
  2: "PutARingOnIt143",
  3: "DipItInChocolate",
  4: "CuddleMeLikeATeddy",
  5: "ToTheOrionAndBack",
  6: "HugsLikeKoala1131",
  7: "KissMeSexy123"
};

const loveNotes = {
  1: "A rose for the one who made my world softer 🌹",
  2: "I choose you, today and every version of tomorrow 💌",
  3: "Life is sweeter with you — just like chocolate 🍫",
  4: "My comfort person, my safe place 🧸... Can't wait to cuddle with you like my personal teddy bear.",
  5: "I promise to choose us, even on hard days 🤞",
  6: "If I could, I'd run to you rn and hug you for hours 🫂",
  7: "Every kiss makes me feel like home 💋"
};

function tryUnlock(n) {
  const input = prompt("Enter today’s secret password 💌");

  if (input === secretPasswords[n]) {
    openSecret(n);
  } else if (input !== null) {
    alert("Wrong password 😝 Try again after I give you today’s one.");
  }
}

function openSecret(n) {
  modal.style.display = "flex";
  modalImg.src = `secret_d${n}.jpg`;
  modalText.innerText = loveNotes[n] || "A little surprise for today 💗";
}

const valentinePassword = "ObviouslyMine"; // <-- change this to whatever you want
const valentineGate = document.getElementById("valentineGate");

valentineGate.addEventListener("click", () => {
  const input = prompt("Valentine’s Day password 💌");

  if (input === valentinePassword) {
    valentineGate.style.display = "none";   // 👈 hide after unlock
    showPage("page2");                      // go to Valentine page
  } else if (input !== null) {
    alert("Not yet 😌 I’ll give you this password on Valentine’s Day.");
  }
});



// --------- MODAL CLOSE ----------
modal.addEventListener("click", () => {
  closeModal();
});

modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});

function closeModal() {
  modal.style.display = "none";
  modalImg.src = "";
}

// --------- CONFETTI ----------
function launchConfetti() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("confetti-heart");
    heart.innerText = ["💖", "💕", "💘", "💝"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight / 2 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

// --------- SPARKLE CURSOR ----------
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

// --------- TYPEWRITER ----------
const message = "In every universe, I’d still choose you 🌸";
let index = 0;

function typeWriterEffect() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  el.innerHTML = "";
  index = 0;

  const interval = setInterval(() => {
    if (index < message.length) {
      el.innerHTML += message.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 60);
}
const storyTexts = [
  "Met as enemies — couldn’t stand each other’s existence.",

  "Dumb Charades brought us back together — for the first time, we 'saw' each other (and oh, the fun we had).",

  "Olive lady day: “Those eyes!!! Gazing at someone in vampire way?” — “Well, I guess my eyes were on a badminton player.”",

  "First date: Kozan — chopsticks day! And our mini-dates era.",

  "We fell quietly — slow, cautious steps, gently growing into each other.",

  "Kolkata and my confession.",

  "Durga Pujo: tension, truth, and the “because I f*cking love you.”",

  "Our first kiss — then miles apart, yet finding home in each other.",

  "Falling asleep together through our screens — until the day we snuggle and doze off listening to each other's heartbeats 💖"
];

function openModal(n) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = `story${n}.jpeg`;
  document.getElementById("modalText").innerText = storyTexts[n - 1];
}

// const modal = document.getElementById("modal");
// const modalImg = document.getElementById("modalImg");

// Close when clicking outside the image (on the dark background)
modal.addEventListener("click", () => {
  closeModal();
});

// Prevent closing when clicking on the image itself
modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});

function closeModal() {
document.getElementById("modal").style.display = "none";
}

document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});
