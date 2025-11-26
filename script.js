const rosaFlorecida = "rose_flower.jpg";
const rosas = document.querySelectorAll(".rosa");

rosas.forEach(rosa => {
  rosa.addEventListener("click", () => {
    if (rosa.dataset.florecida === "false") {
      rosa.src = rosaFlorecida;
      rosa.dataset.florecida = "true";
    }

    const todasFlorecidas = Array.from(rosas).every(r => r.dataset.florecida === "true");
    if (todasFlorecidas) {
      document.body.style.backgroundColor = "skyblue";
    }
  });
});
