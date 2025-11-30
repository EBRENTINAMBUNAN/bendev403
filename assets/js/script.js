/* ---------------------------
          NAVIGASI SECTION
    ----------------------------- */
function navigate(id, btn) {
  document.querySelectorAll("main section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  document.querySelectorAll("nav.bottom-nav button").forEach((button) => {
    button.classList.remove("active");
  });
  btn.classList.add("active");
}

/* ---------------------------
          TYPING EFFECT JS
    ----------------------------- */
const typingElement = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");

const phrases = [
  "Saya Seorang Mahasiswa Teknik Informatika...",
  "dan juga Seorang FullStack Developer.",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 500;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = currentPhrase.substring(0, charIndex);

  typingElement.textContent = currentText;

  if (!isDeleting) {
    if (charIndex < currentPhrase.length) {
      charIndex++;
    } else {
      isDeleting = true;
      delay = 1200;
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 300;
    }
  }

  setTimeout(type, isDeleting ? 50 : delay);
}

function blinkCursor() {
  cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
}

type();
setInterval(blinkCursor, 500);

/* ============================
      MUSIC PLAYER BUTTON
============================= */

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
    musicBtn.textContent = "⏸️ Hentikan Musik";
  } else {
    music.pause();
    isPlaying = false;
    musicBtn.textContent = "🎵 Putar Musik";
  }
});
