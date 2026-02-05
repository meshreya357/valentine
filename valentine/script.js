const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

let noCount = 0;
let musicStarted = false;

const card = document.querySelector("#page1 .card");

noBtn.addEventListener("mouseenter", () => {
  noCount++;

  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount % 3 === 0) {
    alert("JUST SAY YES 😤💖");
  }
});

function spawnBackgroundHearts() {
    const heartsLayer = document.querySelector(".hearts");
  
    if (!heartsLayer) {
      console.error("Hearts layer not found!");
      return;
    }
  
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "bg-heart";
      heart.innerText = ["💖", "💕", "💗", "💘", "💝"][Math.floor(Math.random() * 5)];
  
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.bottom = "-40px";  // start just below viewport
      heart.style.animationDuration = 8 + Math.random() * 6 + "s";
  
      heartsLayer.appendChild(heart);
  
      setTimeout(() => heart.remove(), 15000);
    }, 700);
  }
  
  spawnBackgroundHearts();

  document.addEventListener("DOMContentLoaded", spawnBackgroundHearts);

  

yesBtn.addEventListener("mouseover", () => {
  yesBtn.style.transform = "scale(1.5)";
});

yesBtn.addEventListener("click", () => {
    if (!musicStarted) {
      music.play();
      musicStarted = true;
    }
  
    launchConfetti();
    setTimeout(() => showPage(2), 800);
  });

document.getElementById("heart").onclick = () => showPage(3);
document.getElementById("storyBtn").onclick = () => showPage(4);

function showPage(n) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(`page${n}`).classList.add("active");
  
    if (n === 2) {
      typeWriterEffect();
    }
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
  
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  
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
  
  document.getElementById("backToProposal").addEventListener("click", () => {
    showPage(1);
  });
  