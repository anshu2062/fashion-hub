// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function addToCart(name, price) {
//     cart.push({
//         name: name,
//         price: price,
//         quantity: 1
//     });

//     localStorage.setItem("cart", JSON.stringify(cart));

//     alert(name + " added to cart!");
// }
// function displayCart(){

// let cart=JSON.parse(localStorage.getItem("cart"))||[];

// let cartItems=document.getElementById("cart-items");

// let total=0;

// if(cartItems){

// cartItems.innerHTML="";

// cart.forEach((item,index)=>{

// total+=item.price;

// cartItems.innerHTML+=`

// <tr>

// <td>${item.name}</td>

// <td>Rs.${item.price}</td>

// <td>

// <button class="remove-btn" onclick="removeItem(${index})">

// Remove

// </button>

// </td>

// </tr>

// `;

// });

// document.getElementById("total").innerHTML="Total = Rs."+total;

// }

// }

// function removeItem(index){

// let cart=JSON.parse(localStorage.getItem("cart"));

// cart.splice(index,1);

// localStorage.setItem("cart",JSON.stringify(cart));

// location.reload();

// }

// displayCart();
// ================= CART INITIALIZATION =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ================= ADD TO CART =================
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price,
        quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    // Google Analytics Event Tracking (optional)
    if (typeof gtag === "function") {
        gtag('event', 'add_to_cart', {
            item_name: name,
            value: price,
            currency: 'NPR'
        });
    }

    alert(name + " added to cart!");
}


// ================= DISPLAY CART =================
function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    if (cartItems) {

        cartItems.innerHTML = "";

        cart.forEach((item, index) => {

            total += item.price;

            cartItems.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>Rs. ${item.price}</td>
                    <td>
                        <button class="remove-btn" onclick="removeItem(${index})">
                            Remove
                        </button>
                    </td>
                </tr>
            `;
        });

        let totalElement = document.getElementById("total");
        if (totalElement) {
            totalElement.innerHTML = "Total = Rs. " + total;
        }
    }
}


// ================= REMOVE ITEM =================
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}


// ================= CLEAR CART (OPTIONAL FEATURE) =================
function clearCart() {

    localStorage.removeItem("cart");

    location.reload();
}


// ================= AUTO LOAD CART (ONLY IF CART PAGE) =================
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("cart-items")) {
        displayCart();
    }
});
// order success//
function placeOrder(){
    let name = document.getElementById("name").value;

    if(name === ""){
        alert("Please fill details!");
        return;
    }

    // cart clear
    localStorage.removeItem("cart");

    alert("Order Placed Successfully!");

    // success page ma jancha
    window.location.href = "success.html";
}