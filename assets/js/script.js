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

/* ===========================
   VIDEO MODAL HANDLER
=========================== */
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.querySelector(".modal .close");

// Open modal with video
document.querySelectorAll(".card a").forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const videoURLs = [
      "assets/mp4/project.mp4", 
    ];
    modalVideo.src = videoURLs[index];
    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    modalVideo.src = "";
  }
});

/* ===========================
   MODAL GAMBAR SERTIFIKAT
=========================== */
const certModal = document.getElementById("certificateModal");
const certImg = document.getElementById("modal-cert-img");
const certCloseBtn = document.querySelector(".close-cert");

// Tambahkan event ke semua gambar sertifikat
document.querySelectorAll(".certificate-img").forEach((img) => {
  img.addEventListener("click", () => {
    certImg.src = img.src;
    certModal.style.display = "block";
  });
});

// Tombol close
certCloseBtn.addEventListener("click", () => {
  certModal.style.display = "none";
  certImg.src = "";
});

// Klik luar area modal untuk tutup
window.addEventListener("click", (e) => {
  if (e.target === certModal) {
    certModal.style.display = "none";
    certImg.src = "";
  }
});
