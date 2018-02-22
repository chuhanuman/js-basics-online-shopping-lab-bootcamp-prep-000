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
    temp = "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    
  } else if (cart.length === 2) {
    
  } else {
    for (let i=0;cart.length>i;i++){
    var temp2 = Object.keys(cart[i]);
    if (i === cart.length-1){
      temp = temp + `and ${temp2} at $${cart[i][temp2]}.`;
    } else {
      temp = temp + `${temp2} at $${cart[i][temp2]}, `;
    }
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
addToCart("pancake batter");
viewCart();
addToCart("eggs");
viewCart();
addToCart("milk");
viewCart();
addToCart("cookies");
viewCart();