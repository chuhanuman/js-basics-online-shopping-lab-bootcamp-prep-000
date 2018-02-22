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
  var temp = "In your cart, you have ";
  if (cart.length === 0) {
    temp = "Your shopping cart is empty."
  }
  for (let i=0;cart.length>i;i++){
    if (i === cart.length-1){
      temp = temp + `and ${cart[0]} at $${i}.`;
    } else {
      temp = temp + `${i} at $${i}, `;
    }
  }
  console.log(temp);
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
viewCart();
addToCart("apples");
addToCart("oranges");
viewCart();
console.log(cart[0].bananas);