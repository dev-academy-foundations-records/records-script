// -- JAVASCRIPT CAFE! -- //
// Declare variabls for the product objects//
let products = {
  blackCoffee: {
    stock: 6,
    price: 4,
  },

  whiteCoffee: {
    stock: 4,
    price: 5.5,
  },

  toastie: {
    stock: 7,
    price: 8,
  },

  omelette: {
    stock: 11,
    price: 6,
  },

  muffin: {
    stock: 8,
    price: 4.5,
  },
}
//declare function display products and stock//
function displayProducts() {
  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee:' + products.blackCoffee.stock
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee:' + products.whiteCoffee.stock
  document.getElementById('toastie').innerHTML =
    'Toastie:' + products.toastie.stock
  document.getElementById('omelette').innerHTML =
    'Omelette:' + products.omelette.stock
  document.getElementById('muffin').innerHTML =
    'Muffin:' + products.muffin.stock
}

//calling the function to display//
displayProducts()

//------- CUSTOMERS -------//

//declare variables for the customers//
let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  //make a variable for the random size of the order between our min/max range//

  //make a new arr of the things customers are ordeirng//
  //assign new order to the customer object//
  //display customer order//

  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let newOrder = []

  let productNames = Object.keys(products)

  for (let i = 0; i < orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
  }

  customer.order = newOrder
  displayCustomerOrder()
}

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer Order:' + customer.order
}

function generateCustomerButton() {
  document.getElementById('customerButton').innerHTML = 'Generate Customer'
  document.getElementById('customerButton').onclick = generateCustomerOrder
}
generateCustomerButton()

// ----Transactions----//
let cash = 0
function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash:' + cash
}
displayCash()

function fillOrder() {
  //make a variable to keep track of sale total
  //loop through the customer order arry//
  //in we have their product in stock, sell to them, track the sale
  //if we out of stock, print we are out of stock
  //add the sale total to our cash
  //display the new totals

  let saleTotal = 0
  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]
    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert('I am sorry, we are out of ' + productName)
    }
  }
  cash += saleTotal
  customer.order = []
  displayProducts()
  displayCash()
  displayCustomerOrder()
}

document.getElementById('fillOrder').onclick = fillOrder

fillOrder()
//---Utility---//
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
