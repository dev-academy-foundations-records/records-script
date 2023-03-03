// -- JAVASCRIPT CAFE! -- //
// -- PRODUCTS --  //

let products = {
  whiteCoffee: {
    stock: 7,
    price: 3.5,
  },

  blackCoffee: {
    stock: 6,
    price: 3.2,
  },

  muffin: {
    stock: 4,
    price: 5,
  },

  eggs: {
    stock: 5,
    price: 3.2,
  },
}

function displayProduct() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee: ' + products.whiteCoffee.stock
  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee: ' + products.blackCoffee.stock
  document.getElementById('muffin').innerHTML =
    'Muffin: ' + products.muffin.stock
  document.getElementById('eggs').innerHTML = 'Eggs: ' + products.eggs.stock
}

displayProduct()

// -- CUSTOMERS -- //

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 4

function generateCustomerOrder() {
  let orderSize = (minOrderSize, maxOrderSize)
  let productNames = Object.keys(products)
  let newOrder = []

  for (let i = 0; i <= orderSize; i++) {
    //Get a random size for an order in a range from 1-5//
    let productIndex = getRandomInt(0, productNames.length - 1)
    //Make a new array of the things we are ordering//
    let productName = productNames[productIndex]
    //Assign the new order to the customer object//
    newOrder.push(productName)
  }
  customer.order = newOrder
  displayCustomerOrder()
}

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

// ----TRANSACTION----//
let cash = 0
function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash: ' + cash
}
displayCash()

function fillOrder() {
  // add sale total to cash
  // clear customer order
  // display new total

  // loop through cust order array
  // if we have product, sell to customer, keep track of the sale
  // if we don't have product, alert warning
  let saleTotal = 0
  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]

    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert("I'm sorry, we're out of " + productName)
    }
  }
  cash += saleTotal
  customer.order = []

  displayProduct()
  displayCash()
  displayCustomerOrder()
}

document.getElementById('fillOrder').onclick = fillOrder

//-----UTILITY----//
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
