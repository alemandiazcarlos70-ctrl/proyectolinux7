const rosas = document.querySelectorAll(".rosa");
const sol = document.getElementById("sol");

rosas.forEach(rosa => {
  const petalos = rosa.querySelectorAll(".petalo");

  rosa.addEventListener("click", () => {
    if (rosa.dataset.florecida === "false") {
      petalos.forEach(p => p.style.transform = "scale(1)");
      rosa.dataset.florecida = "true";

      // Crear el tallo dinámicamente
      const tallo = document.createElement("div");
      tallo.className = "tallo";
      rosa.appendChild(tallo);
    }

    const todasFlorecidas = Array.from(rosas).every(r => r.dataset.florecida === "true");
    if (todasFlorecidas) {
      document.body.style.backgroundColor = "skyblue";
      sol.style.opacity = "1";
    }
  });
});
