const buyButton = document.getElementById("buyButton");
const message = document.getElementById("message");

buyButton.addEventListener("click", () => {
  message.classList.add("show");

  setTimeout(() => {
    message.classList.remove("show");
  }, 2200);
});
