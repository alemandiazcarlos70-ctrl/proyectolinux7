const rosa = document.querySelector(".rosa");
const petalos = document.querySelectorAll(".petalo");

rosa.addEventListener("click", () => {
  if (rosa.dataset.florecida === "false") {
    petalos.forEach(p => p.style.transform = "scale(1)"); // se abren
    rosa.dataset.florecida = "true";
    document.body.style.backgroundColor = "skyblue"; // cambia el fondo
  }
});
