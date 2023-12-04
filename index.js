const product={
    name:"product name",
    price:20
};
let cart=[];
let total=0;

function addToCart(){
    cart.push(product);
    total+=product.price;

    updateCartUI();
}

function updateCartUI(){
    const cartItemsElement=document.getElementById('cart-items');
    const totalElement=document.getElementById("total");

    cartItemsElement.innerHTML="";

    cart.forEach(item=>{
        const listenItem=document.createElement("li");
        listenItem.textContent=item.name;
        cartItemsElement.appendChild(listItem);
    });
    totalElement.textContent=total;
}