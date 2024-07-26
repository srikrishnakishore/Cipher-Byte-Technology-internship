document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description for product 1',
            price: '$10.00',
            image: 'https://via.placeholder.com/200'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for product 2',
            price: '$20.00',
            image: 'https://via.placeholder.com/200'
        },
        // Add more product objects here
    ];

    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        productGrid.appendChild(productCard);
    });

    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        }
    });

    function addToCart(productId) {
        console.log(`Product ${productId} added to cart`);
        // Add logic to handle adding product to cart
    }
});
