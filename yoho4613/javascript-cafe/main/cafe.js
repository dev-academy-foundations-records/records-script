// -- JAVASCRIPT CAFE! -- //

// EventListeners //
document.getElementById('customerButton').addEventListener('click', generateCustomerOrder);
document.getElementById('fillOrderButton').addEventListener('click', fillOrder)

// Variables
let products = {

  whiteCoffee: {
    stock: 4,
    price: 4
  },

  blackCoffee: {
    stock: 5,
    price: 3
  },
  
  sandwich: {
    stock: 9,
    price: 8
  },
  
  muffin: {
    stock: 2,
    price: 3.50
  },
  
  eggs: {
    stock: 1,
    price: 12.50
  },
}

let customer = {
  order: {}
}
let minOrderSize = 1;
let maxOrderSize = 5;
let cash = 0;

// Init //
init();

function init() {
  displayProducts();
  displayCustomerOrder()
  displayCash();
}

// Functions //
function displayProducts() {
  for (const keys in products) {
    document.getElementById(keys).innerHTML = `${keys}: ${products[keys].stock}`
  }
}

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize);

  let newOrder = {};

  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]

    newOrder[productName] ? newOrder[productName] = newOrder[productName] + 1 : newOrder[productName] = 1;
  }
  customer.order = newOrder
  displayCustomerOrder();
}

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML = `Customer Order: ${Object.entries(customer.order)}`
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function displayCash() {
  document.getElementById('cash').innerHTML = `Cash: ${cash}`;
}

function fillOrder () {
  let totalPrice = 0;

  // Check the stock amount compare to order
  for (keys in customer.order) {
    if (customer.order[keys] > products[keys].stock) return alert("I'm sorry, we're out of " + keys);
  }

  // update new stock after order fulfilled.
  for (keys in customer.order) {
    products[keys].stock-=1;
    totalPrice += products[keys].price;
  }

  //update the cash balance after order fulfilled 
  cash += totalPrice;
  customer.order = [];

  //display everything again
  init();
}