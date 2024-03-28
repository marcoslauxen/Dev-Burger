const abrirModal = document.querySelector("#btn-pedidos");
const fecharModal = document.querySelector("#btn-fechar");
const btnFinalizar = document.querySelector("#btn-finalizar");
const meuModal = document.querySelector(".modal");
const input = document.querySelector("#input");
const msgErro = document.querySelector("#erro");
const botoesAdicionar = document.querySelectorAll(".add-to-cart-btn");
const qtdAdicionada = document.getElementById("qtd-adicionada");
const listaAdicionada = document.querySelector(".box-valor-total ol");

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
    qtdAdicionada.innerText = `0`;
    listaAdicionada.innerHTML = "";
    atualizarTotalPedido();
    Toastify({
      text: "Pedido enviado com sucesso!",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      style: {
        background: "#54cc0a",
        color: "#ffffff",
      },
    }).showToast();
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

let totalPedido = 0;

botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const nomeItem = botao.getAttribute("data-name");
    const precoItem = parseFloat(botao.getAttribute("data-price"));
    totalPedido += precoItem;
    document.getElementById("total-valor").innerText = totalPedido.toFixed(2);

    let quantidade = parseInt(qtdAdicionada.innerText);
    quantidade += 1;
    qtdAdicionada.innerText = quantidade;

    const hamburgerAdicionado = document.createElement("li");
    const iconLixeira = document.createElement("i");
    hamburgerAdicionado.innerText = `${nomeItem} - R$ ${precoItem}`;
    hamburgerAdicionado.classList.add("item-carrinho");
    iconLixeira.classList.add("fas", "fa-trash-alt", "delete-icon");
    hamburgerAdicionado.appendChild(iconLixeira);

    const lugarAdicionado = document.querySelector(".box-valor-total ol");
    lugarAdicionado.appendChild(hamburgerAdicionado);

    Toastify({
      text: "Item adicionado!",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      style: {
        background: "#54cc0a",
        color: "#ffffff",
      },
    }).showToast();
  });
});

function atualizarTotalPedido() {
  totalPedido = 0;
  document.getElementById("total-valor").innerText = totalPedido.toFixed(2);
}
