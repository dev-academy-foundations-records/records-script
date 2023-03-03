// -- JAVASCRIPT CAFE! -- //
// Products   //

let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    stock: 7,
    price: 3.5,
  },
  muffin: {
    stock: 5,
    price: 8.5,
  },

  eggs: {
    stock: 1,
    price: 12.5,
  },
}

function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee: ' + products.whiteCoffee.stock

  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee: ' + products.blackCoffee.stock

  document.getElementById('muffin').innerHTML =
    'Muffin: ' + products.muffin.stock

  document.getElementById('eggs').innerHTML = 'Eggs: ' + products.eggs.stock
}
displayProducts()

//Customers//

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  //Get a random size for the order un a range 1-5
  // Make a new arrat of things they are ordering
  // assign the new order to the customer object
  //display customer order!
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)
  let newOrder = []
  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
  }
  customer.order = newOrder
  displayCustomerOrder()
}
generateCustomerOrder()

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer Order: ' + customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

// Transactions //
let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash: ' + cash
}

displayCash()

function fillOrder() {
  // loop through the customer order array
  //make a variable to keep track of sale
  // if we have product in stick sell and keep track of sale
  // if we dont hav eit alert were out on this product
  //add sale total to our cash
  //clear the customer order
  // display new totals
  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]
    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert("I'm sorry, we are out of " + productName)
    }
  }
  cash += saleTotal
  customer.order = []
  displayProducts()
  displayCash()
  displayCustomerOrder()
}
document.getElementById('fillOrder').onclick = fillOrder
// Utill //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
