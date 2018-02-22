var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var temp = item;
 item = {[item]:(Math.floor(Math.random()*100))};
 cart.push(item);
 console.log(`${temp} has been added to your cart.`);
 return cart;
}

function viewCart() {
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
viewCart();
addToCart("bananas");
addToCart("apples");
console.log(cart);
addToCart("oranges");
console.log(cart);