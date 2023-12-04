//adding elements to cart
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const itemId = button.getAttribute("data-item-id");
            const itemName = button.getAttribute("data-item-name");
            const itemPrice = button.getAttribute("data-item-price");

            const item = {
                id: itemId,
                name: itemName,
                price: parseFloat(itemPrice)
            };

            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

            cartItems.push(item);

            localStorage.setItem("cart", JSON.stringify(cartItems));

            alert("Item added to cart!");



        });
    });
});




// checkout form 
document.addEventListener("DOMContentLoaded", function() {
    const checkoutButton = document.querySelector(".btn-checkout");

    checkoutButton.addEventListener("click", function() {
        window.location.href = "checkout.html";
    });
});
