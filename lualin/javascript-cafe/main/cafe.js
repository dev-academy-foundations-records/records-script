// -- JAVASCRIPT CAFE! -- //

// -- Products Variables -- //
const products = {
  whiteCoffee: {
    name: 'White Coffee',
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    name: 'Black Coffee',
    stock: 7,
    price: 3.5,
  },

  muffin: {
    name: 'Muffin',
    stock: 5,
    price: 5,
  },

  eggs: {
    name: 'Eggs',
    stock: 1,
    price: 12.5,
  },
}
// -- Products Variables -- //

// -- Customers Variables -- //

// Array of customer orders
const customer = {
  order: [],
}
// -- Customers Variables -- //

// Displays name and stock quantity of products in container <div>
function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee: ' + products.whiteCoffee.stock

  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee: ' + products.blackCoffee.stock

  document.getElementById('muffin').innerHTML =
    'Muffin: ' + products.muffin.stock

  document.getElementById('eggs').innerHTML = 'Eggs: ' + products.eggs.stock
}

// Displays customer order
function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

// Generates customer order
function generateCustomerOrder() {
  // Minimum and maximum numbers of order size
  const maxOrderSize = 5
  const minOrderSize = 1
  const orderSize = getRandomInt(minOrderSize, maxOrderSize)
  const newOrder = []
  const productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    const productIndex = getRandomInt(0, productNames.length - 1)
    const productName = productNames[productIndex]
    newOrder.push(productName)
  }

  customer.order = newOrder
  displayCustomerOrder()
}

// -- Transactions -- //
const cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Available Cash: $' + cash
}

function fillOrder() {
  const salesTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    const productName = customer.order[i]
    if (products[productName].stock > 0) {
      products[productName].stock--
      salesTotal += products[productName].price
    } else {
      alert('We are out of' + productName)
    }
  }

  cash += salesTotal
  customer.order = []

  displayProducts()
  displayCash()
  displayCustomerOrder()
}

// -- Transactions -- //

displayProducts()
document.getElementById('generateOrder').onclick = generateCustomerOrder
document.getElementById('fillOrder').onclick = fillOrder

// -- Utility -- //

// Gets a random number with given min and max parameters
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
