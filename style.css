* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  
    background: 
      linear-gradient(rgba(255, 214, 232, 0.5), rgba(224, 247, 250, 0.5)),
      url("main1.jpg");
  
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  
    overflow: hidden;
  }
  
  h1, h2 {
    font-family: 'Quicksand', sans-serif;
  }
  
  body, p, button {
    font-family: 'Nunito', sans-serif;
  }
  

  body::after {
    content: "";
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1), rgba(0,0,0,0.3));
    pointer-events: none;
    z-index: 100;
  } 

  .page {
    position: absolute;
    inset: 0;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: fade 0.8s ease;
  
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(2px);
  }
  
  .page.active {
    display: flex;
  }
  
  @keyframes fade {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  
  #page2 h1
  {
    text-align: center;
    font-size: 60px;
    color: #a71e65;
  }

  #page2 p
  {
    text-align: center;
    font-size: 30px;
    color: #6c2047;
  }

  .card {
    position: relative;
    background: rgba(255, 255, 255, 0.174);
    padding: 50px 40px;
    border-radius: 28px;
    text-align: center;
  
    width: 1000px;       
    max-width: 90%;
    min-height: 320px;
  
    box-shadow: 0 25px 60px rgba(0,0,0,0.25);
    backdrop-filter: blur(12px);
  }
  
  .card h2 {
    font-size: 42px;
  }
  
  .card p {
    font-size: 24px;
    line-height: 1.5;
  }
  
  .pop {
    animation: popIn 0.6s ease-out;
  }
  
  @keyframes popIn {
    from {
      transform: scale(0.9) translateY(10px);
      opacity: 0;
    }
    to {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }
  

  .btns button {
    padding: 12px 28px;
    border: none;
    border-radius: 30px;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
  }
  
  #yesBtn {
    background: #ff4d6d;
    color: white;
  }
  
  #yesBtn:hover {
    transform: scale(1.09);
    background: white;
    color: #ff4d6d;
  }
  
  #noBtn {
    background: #999;
    color: white;
    position: absolute;   /* stays inside .card now */
  }
  
  
  .glow {
    color: #ff4d6d;
    text-shadow: 0 0 20px pink;
  }
  
  .heart {
    font-size: 100px;
    cursor: pointer;
    animation: pulse 1.2s infinite;
  }
  
  @keyframes pulse {
    50% { transform: scale(1.2); }
  }
  
  .storyBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 18px;
    border-radius: 20px;
    border: none;
    background: rgb(93, 12, 39);
    color: white;
    cursor: pointer;
  }
  
  .storyBtn:hover {
    transform: scale(1.1); 
    background: white;
    color: rgb(63, 16, 32);
  }
  
  .collage {
    width: min(90vw, 1000px);   /* big on desktop, responsive on mobile */
    max-height: 75vh;         /* don’t overflow screen height */
    object-fit: contain;
    border-radius: 30px;
  
    box-shadow: 0 20px 50px rgba(0,0,0,0.35);
    backdrop-filter: blur(2px);
  
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  
  .collage:hover {
    transform: scale(1.03);   /* subtle zoom on hover */
    box-shadow: 0 28px 70px rgba(0,0,0,0.45);
  }
  
  /* Our Story grid container */
.grid {
    width: 1000px;                 /* 👈 fixed wide layout on desktop */
    max-width: 95vw;               /* responsive fallback */
    height: auto;
  
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 columns */
    gap: 24px;
  
    margin: 20px auto 0;           /* center horizontally */
  }
  
  /* Each image tile */
  .grid img {
    width: 100%;
    height: 180px;                 /* 👈 keeps the same height as now (adjust if needed) */
    object-fit: cover;             /* no squishing, crops nicely */
    border-radius: 18px;
  
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 24px rgba(0,0,0,0.25);
  }
  
  .grid img:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 40px rgba(0,0,0,0.35);
  }
  
  
  .modal {
    position: fixed;
    inset: 0;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    z-index: 9999;
  }
  
  .modal img {
    width: 700px;
    max-width: 90vw;     /* responsive on small screens */
    border-radius: 20px;
    margin-bottom: 10px;
  }
  
  
  .close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 28px;
    color: white;
    cursor: pointer;
  }
  
  /* Floating hearts */
  .hearts {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 999;   /* 👈 bring hearts above background, below UI */
  }
  
  .bg-heart {
    position: fixed;
    font-size: 26px;
    opacity: 0.35;
    animation: floatUp 10s linear infinite;
  }
  
  @keyframes floatUp {
    0% {
      transform: translateY(110vh) scale(0.8);
      opacity: 0;
    }
    20% {
      opacity: 0.35;
    }
    100% {
      transform: translateY(-20vh) scale(1.2);
      opacity: 0;
    }
  }
  
  
  
  .sparkle {
    position: fixed;
    pointer-events: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #fff 0%, #ffd6e8 40%, rgba(255,255,255,0) 70%);
    box-shadow: 0 0 10px rgba(255, 182, 193, 0.8);
    animation: sparkleFade 1s forwards;
  }
  
  @keyframes sparkleFade {
    0% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    100% {
      transform: scale(0) translateY(-20px);
      opacity: 0;
    }
  }

  .confetti-heart {
    position: fixed;
    font-size: 20px;
    animation: confettiFall 1.5s ease-out forwards;
    pointer-events: none;
  }
  
  @keyframes confettiFall {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(200px) scale(0.5);
      opacity: 0;
    }
  }
  
  .typewriter {
    font-size: 18px;
    margin-top: 10px;
    color: #6b2d5c;
    text-align: center;
    max-width: 300px;
  }

  .backBtn {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 10px 18px;
    border-radius: 20px;
    border: none;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    cursor: pointer;
    font-size: 14px;
    backdrop-filter: blur(6px);
    transition: 0.3s ease;
  }
  
  .backBtn:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateX(-3px);
  }
  
  #modalText {
    max-width: 420px;
    text-align: center;
    line-height: 1.6;
    font-size: 16px;
    color: #fff;
    margin-top: 12px;
  }
  
  .storyHeart {
    position: absolute;
    top: 24px;
    right: 24px;
  
    display: flex;
    align-items: center;
    gap: 10px;
  
    font-size: 36px;
    cursor: pointer;
    user-select: none;
  
    padding: 10px 14px;
    border-radius: 999px;
  
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.25);
  
    animation: heartPulse 1.6s ease-in-out infinite, floatHint 3s ease-in-out infinite;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  @keyframes floatHint {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-4px); }
    100% { transform: translateY(0); }
  }
  
  .storyHeart:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 40px rgba(0,0,0,0.35);
  }
  
  .heartLabel {
    font-size: 13px;
    letter-spacing: 0.4px;
    color: #6b2d5c;
    font-weight: 600;
  }
  
  @keyframes heartPulse {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.15); }
    100% { transform: scale(1); }
  }
  
  .secretsTitle {
    font-size: 32px;
    margin-bottom: 8px;
  }
  
  .secretsSubtitle {
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .secretsGrid {
    display: grid;
    position: relative;
    z-index: 10;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    max-width: 600px;
  }
  
  .secretHeart {
    font-size: 56px;
    cursor: pointer;
    pointer-events: auto;   /* 👈 allow clicking */
    z-index: 10;
    padding: 20px;
    border-radius: 20px;
    background: rgba(255,255,255,0.35);
    backdrop-filter: blur(6px);
    text-align: center;
    transition: 0.3s ease;
    animation: heartPulse 1.6s ease-in-out infinite;
  }
  
  .secretHeart:hover {
    transform: scale(1.15);
  }
  
  .spin {
    animation: heartPulse 1.6s ease-in-out infinite, slowSpin 6s linear infinite;
  }
  
  @keyframes slowSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  
  .todayGlow {
    box-shadow: 0 0 20px rgba(255, 77, 109, 0.9), 0 0 40px rgba(255, 182, 193, 0.8);
    background: rgba(255,255,255,0.6);
  }
  
  .locked {
    opacity: 0.4;
    filter: grayscale(60%);
  }
  
  /* Allow clicks on content inside pages */
.page {
  pointer-events: none;
}

.page > * {
  pointer-events: auto;
}

/* Make sure secret hearts sit above overlays */
#pageSecrets .secretsGrid,
#pageSecrets .secretHeart {
  position: relative;
  z-index: 1001;
}

/* Background overlays must not block clicks */
.hearts,
body::after {
  pointer-events: none;
}

.valentineGate {
  position: absolute;
  top: 24px;
  right: 24px;

  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 34px;
  cursor: pointer;
  user-select: none;

  padding: 10px 14px;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.25);

  animation: heartPulse 1.6s ease-in-out infinite, floatHint 3s ease-in-out infinite;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 100;
}

.valentineGate:hover {
  transform: scale(1.06);
  box-shadow: 0 16px 40px rgba(0,0,0,0.35);
}

.gateLabel {
  font-size: 12px;
  letter-spacing: 0.4px;
  color: #6b2d5c;
  font-weight: 700;
  text-transform: uppercase;
}
.valentineGate.locked {
  opacity: 0.7;
  filter: grayscale(20%);
}

  
