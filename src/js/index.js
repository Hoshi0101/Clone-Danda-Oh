const btnavancar = document.getElementById("btn-avancar");
const btnvoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
const cartaVirar = document.getElementById(".lista-personagens")
let cartaoAtual = 0;

btnavancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCarta(cartaoAtual);

});

btnvoltar.addEventListener("click", function () {

    if (cartaoAtual === 0) return;
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCarta(cartaoAtual);
});

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function () {
        const cartaVirada = cartao.querySelector
            (".carta-virada");

        // virar o cartão
        cartao.classList.toggle("virar");
        cartaVirada.classList.toggle("mostrarfundo");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });
});

function mostrarCarta(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

