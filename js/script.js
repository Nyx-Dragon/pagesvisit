const counterContainer = document.querySelector("#contadorVisitas");
const resetButton = document.getElementById("btnReestablecer");
let visitCount = localStorage.getItem("visitas");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("visitas", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("visitas", 1);
}
counterContainer.innerHTML = visitCount

resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("visitas", 1);
  counterContainer.innerHTML = visitCount
});
