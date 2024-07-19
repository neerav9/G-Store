<script>
    document.addEventListener('DOMContentLoaded', () => {
        const cartButtons = document.querySelectorAll('.add-cart');
        
        cartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const itemId = button.getAttribute('data-id');
                const itemTitle = button.getAttribute('data-title');
                const itemAuthor = button.getAttribute('data-author');
                const itemPrice = button.getAttribute('data-price');
                const itemImage = button.getAttribute('data-image');
                
                const cartItem = {
                    id: itemId,
                    title: itemTitle,
                    author: itemAuthor,
                    price: itemPrice,
                    image: itemImage
                };

                addToCart(cartItem);
            });
        });
    });

    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${item.title} has been added to your cart.`);
    }
</script>
