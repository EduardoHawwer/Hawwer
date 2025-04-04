document.getElementById('cartao').addEventListener('click', processarCompra);

function processarCompra() {
    const fruta = document.getElementById('fruta').value.trim();
    const quantidade = Number(document.getElementById('quantidade').value);
    const tela = document.getElementById('tela');
    const cartao = document.getElementById('cartao');

    if (!fruta || quantidade <= 0) {
        tela.innerHTML = "Por favor, insira uma fruta e uma quantidade válida.";
        tela.style.color = 'red';
        return;
    }

    cartao.classList.add('deslizando');

    setTimeout(() => {
        if (quantidade <= 3) {
            tela.innerHTML = `Pagamento aprovado! Você comprou ${quantidade} unidade(s) de ${fruta}.`;
            tela.style.color = 'green';
        } else {
            tela.innerHTML = `Pagamento recusado! Você tentou comprar ${quantidade} unidade(s).`;
            tela.style.color = 'red';
        }
        cartao.classList.remove('deslizando');
    }, 1000);
}