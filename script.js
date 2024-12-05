const produtos = document.querySelectorAll('.adicionar-carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalElement = document.getElementById('total');
let carrinho = [];
let total = 0;

// Atualizar carrinho no HTML
function atualizarCarrinho() {
    itensCarrinho.innerHTML = '';
    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
        totalElement.textContent = 'Total: R$ 0,00';
        return;
    }

    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.quantidade}x ${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(itemElement);
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adicionar produto ao carrinho
produtos.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement;
        const id = produto.getAttribute('data-id');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));

        // Verificar se o produto já está no carrinho
        const itemExistente = carrinho.find(item => item.id === id);
        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.push({ id, nome, preco, quantidade: 1 });
        }

        total
