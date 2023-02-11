let btn = document.querySelector(".btns-contact");
let modals = document.querySelector(".body-modal");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((modals.style.display = "none")) {
    modals.style.display = "flex";
  }
});

body.addEventListener("click", () => {
  modals.style.display = "none";
});
