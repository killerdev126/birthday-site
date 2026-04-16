const messages = [
  "Really sure??",
  "Are you positive? 😳",
  "Pookie please 🥺",
  "Last chance 😭",
  "Please say yes 💞",  // 🔥 trigger point
];

let index = 0;
let runawayMode = false;

const noBtn = document.querySelector(".no-button");
const yesBtn = document.querySelector(".yes-button");

// 👉 NO CLICK
function handleNoClick() {
  const currentMessage = messages[index];
  noBtn.innerText = currentMessage;

  // 👉 Activate runaway mode ONLY at this message
  if (currentMessage === "Please say yes 💞") {
    runawayMode = true;
  }

  index = (index + 1) % messages.length;

  // YES grows
  let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (yesSize * 1.45) + "px";

  // NO shrinks
  let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = Math.max(10, noSize * 0.9) + "px";
}

// 👉 RUN AWAY LOGIC (ONLY AFTER TRIGGER)
function moveButton() {
  if (!runawayMode) return;

  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// 👉 Desktop hover
noBtn.addEventListener("mouseover", moveButton);

// 👉 Mobile touch
noBtn.addEventListener("touchstart", moveButton);

// 👉 YES CLICK
function handleYesClick() {
  window.location.href = "yes.html";
}
