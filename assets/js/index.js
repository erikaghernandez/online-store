let path = window.location.pathname;
if(!path.endsWith('/')) { path += '/'; }


let final_form = document.getElementById("final_form");
if(final_form) {
    final_form.onsubmit = e => {
        e.preventDefault();
        alert("Success!");
    }
}

let inputs = document.getElementsByTagName("input");


for(let i=0; i<inputs.length; i++) {
    inputs[i].onchange = function() {
        
        let inp = inputs[i];
        if(inp.value === "") {
            inp.classList.remove("input-filled");
        } else {
            if(!inp.classList.contains("input-filled")) {
                inp.classList.add("input-filled");
            }
        }
    }
}
let products = [
    {
        name: 'Black Hat',
        tag: 'blkhat',
        price: 15,
        inCart: 0
    },
    name: 'Black Hat',
    tag: 'blkhat',
    price: 15,
    inCart: 0
},

]
let carts = document.querySelectorAll('.add-cart');
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("added to cart");
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    console.log(typeof productNumbers);
    
    productNumbers = parseInt(productNumbers);
    console.log(typeof productNumbers);

    if(productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
    }
    else {
        localStorage.setItem('cartNumbers', 1);

    }
    setItems(product);


}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems);

    if(cartItems != null ) {

        if(cartItems[product.tag] += undefined){
            cartItems = {
                ...cartItems,[product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart =1;
        cartItems = {
            [product.tag]: product
        }
    }
    product.inCart =1;
    cartItems = {
        [product.tag]: product
    }
    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);

    if(cartCost != null ){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
    localStorage.setItem("totalCost", product.price);
    }
}
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector ("cart-items");


    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += ''
        })

    }
}


onLoadCartNumbers();
displayCart();


