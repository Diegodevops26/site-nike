document.addEventListener('DOMContentLoaded', function() {
    
    // Alerta para o botão do carrinho
    const cartButton = document.querySelector('.cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            alert('Seu carrinho de compras está vazio!');
        });
    }

    // Efeito de hover nos cards de produto
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Aqui você poderia adicionar lógicas mais complexas
        });
        card.addEventListener('mouseleave', () => {
            // E aqui também
        });
    });

    console.log("Site da Nike carregado com sucesso!");
});