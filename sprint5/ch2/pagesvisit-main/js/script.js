const contador = document.getElementById("contadorVisitas");
const btn = document.getElementById("btnReestablecer");

function contar() {
  let save = localStorage.getItem("visitas");
  if (save === null) {
    save = 0;
  } else {
    save = parseInt(save);
  }
  save++;
  localStorage.setItem("visitas", save.toString());
  return save;
}
window.addEventListener("load", function () {
  let visitasContar = contar();
  contador.textContent = visitasContar;
});

function reseteo() {
    btn.addEventListener("click", function () {
        localStorage.removeItem("visitas");
        contador.textContent = 0;
    })};
reseteo();