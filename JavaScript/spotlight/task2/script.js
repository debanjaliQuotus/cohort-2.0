const p = document.querySelector("p");
const text = p.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
let iteration = 0;

function randomText() {
  let str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return characters.split("")[
        Math.floor(Math.random() * characters.length)
      ];
    })
    .join("");
  p.innerText = str;
  iteration += 0.2;
}

p.addEventListener("mouseenter", () => {
  setInterval(randomText, 30);
});
