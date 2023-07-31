let cartItems = [];
let cartTotal = 0;

function addToCart(itemName, price) {
  cartItems.push(itemName);
  cartTotal += price;

  updateCartUI();
}

function updateCartUI() {
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');

  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    cartItemsList.appendChild(listItem);
  });

  cartTotalSpan.innerText = cartTotal;
}

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click', () =>{
    nav.classList.add('active');
  })
}

if(close){
  close.addEventListener('click', () =>{
    nav.classList.remove('active');
  })
}