const rosas = document.querySelectorAll(".rosa");
const sol = document.getElementById("sol");

rosas.forEach(rosa => {
  const petalos = rosa.querySelectorAll(".petalo");
  const tallo = rosa.querySelector(".tallo");

  rosa.addEventListener("click", () => {
    if (rosa.dataset.florecida === "false") {
      petalos.forEach(p => p.style.transform = "scale(1)");
      tallo.style.opacity = "1"; // aparece el tallo
      rosa.dataset.florecida = "true";
    }

    const todasFlorecidas = Array.from(rosas).every(r => r.dataset.florecida === "true");
    if (todasFlorecidas) {
      document.body.style.backgroundColor = "skyblue";
      sol.style.opacity = "1";
    }
  });
});
