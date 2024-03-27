const abrirModal = document.querySelector("#btn-pedidos");
const fecharModal = document.querySelector("#btn-fechar");
const btnFinalizar = document.querySelector("#btn-finalizar");
const meuModal = document.querySelector(".modal");
const input = document.querySelector("#input");
const msgErro = document.querySelector("#erro");

horarioFuncionamento();

abrirModal.addEventListener("click", () => {
  meuModal.style.display = "flex";
});

fecharModal.addEventListener("click", () => {
  fecharModalHandler();
});

btnFinalizar.addEventListener("click", () => {
  btnFinalizarHandler();
});

function fecharModalHandler() {
  meuModal.style.display = "none";
  input.value = "";
}

function btnFinalizarHandler() {
  const valueInput = input.value;

  if (valueInput === "") {
    msgErro.style.display = "flex";
  } else {
    msgErro.style.display = "none";
    fecharModalHandler();
  }
}

function horarioFuncionamento() {
  const data = new Date();
  const hora = data.getHours();

  const horario = document.querySelector(".box-horario");

  if (hora >= 18 && hora <= 21) {
    horario.style.backgroundColor = "#54cc0a";
  } else {
    horario.style.backgroundColor = "#EF4444";
  }
}
