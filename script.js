/* Typing Animation */
const text = "Are you my Valentine?";
let index = 0;
const typingEl = document.getElementById("typingText");

function typeText() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 80);
  }
}
typeText();

/* Yes Button Action */
const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = `
    <h1 class="beat">YAYYYY!! 💘💘</h1>
    <p>You just made my day ❤️</p>

    <img src="myphoto.jpeg" class="result-img">

    <h3>Forever My Valentine 💖</h3>
  `;
});

/* No Button Text Change Instead of Running Away */
const noBtn = document.getElementById("noBtn");

const messages = [
  "Are you sure? 😢",
  "Think again 🥺",
  "Really really sure? 😭",
  "One more chance? 💔",
  "Please say yes 😣",
  "Don't break my heart 💘"
];

let msgIndex = 0;

noBtn.addEventListener("click", () => {
  if (msgIndex < messages.length) {
    noBtn.textContent = messages[msgIndex];
    msgIndex++;
  } else {
    msgIndex=-1;
  }
});

/* Floating Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 350);

