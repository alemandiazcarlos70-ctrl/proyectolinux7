// Imagen de rosa florecida
const rosaFlorecida = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rose_flower.jpg/120px-Rose_flower.jpg";

const rosas = document.querySelectorAll(".rosa");

rosas.forEach(rosa => {
  rosa.addEventListener("click", () => {
    if (rosa.dataset.florecida === "false") {
      rosa.src = rosaFlorecida;
      rosa.dataset.florecida = "true";
    }

    // Verificar si todas florecieron
    const todasFlorecidas = Array.from(rosas).every(r => r.dataset.florecida === "true");
    if (todasFlorecidas) {
      document.body.style.backgroundColor = "skyblue";
    }
  });
});
