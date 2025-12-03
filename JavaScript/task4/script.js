let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");
let grow = 0;

btn.addEventListener("click", () => {
  let growiss = setInterval(() => {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
  }, 50);

  setTimeout(() => {
    clearInterval(growiss);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = "0.6";
    btn.disabled = true;

  }, 5000);
});
