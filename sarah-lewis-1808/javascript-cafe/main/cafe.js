//PRODUCTS

let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    stock: 7,
    price: 3.5,
  },

  muffins: {
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
    'White Coffee: ' +
    products.whiteCoffee.stock +
    ' | $ ' +
    products.whiteCoffee.price

  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee: ' +
    products.blackCoffee.stock +
    ' | $ ' +
    products.blackCoffee.price

  document.getElementById('muffins').innerHTML =
    'Muffins: ' + products.muffins.stock + ' | $ ' + products.muffins.price

  document.getElementById('eggs').innerHTML =
    'Eggs: ' + products.eggs.stock + ' | $ ' + products.eggs.price
}
displayProducts()
// CUSTOMERS

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize) // 1, 5

  let newOrder = []

  let productNames = Object.keys(products)

  for (let i = 0; i < orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1) // 0,
    let product = productNames[productIndex]
    newOrder.push(product)
    console.log(product)
  }

  customer.order = newOrder
  displayCustomerOrder()
}

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

// TRANSACTIONS

let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash: ' + cash
}

displayCash()

function fillOrder() {
  // make variable to keep track of sale total
  // loop through the customer order array
  //if we have the product in stock, sell it to them, keep track of sale
  //if no item in stock, alert lack of stock
  // add sale total to cash
  //clear customer order
  //display new totals

  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let product = customer.order[i]

    if (products[product].stock > 0) {
      products[product].stock--
      saleTotal += products[product].price
    } else {
      alert("I'm sorry we're out of " + product)
    }
  }
  cash += saleTotal
  customer.order = []
  displayProducts()
  displayCash()
  displayCustomerOrder()
}

document.getElementById('fillOrder').onclick = fillOrder

// UTILITIES
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
