// -- JAVASCRIPT CAFE! -- //

// PRODUCTS //

let products = {

  whiteCoffee: {
    stock: 4,
    price: 4
  },

  blackCoffee: {
    stock: 7,
    price: 3.5
  },

  yerbaMate: {
    stock: 5,
    price: 8.5
  },

  donut: {
    stock: 1,
    price: 3.5
  }
}

function displayProducts() {

  document.getElementById("whiteCoffee").innerHTML =
    "White Coffee: " + products.whiteCoffee.stock

  document.getElementById("blackCoffee").innerHTML =
    "Black Coffee: " + products.blackCoffee.stock

  document.getElementById("yerbaMate").innerHTML =
    "Yerba Mate: " + products.yerbaMate.stock

  document.getElementById("donut").innerHTML =
    "Donut: " + products.donut.stock
}

displayProducts()

// CUSTOMERS //

let customer = {
  order: []
}

let minOrderSize = 1
let maxOrderSize = 5


function generateCustomerOrder() {
  // get a random size for the order in range 1-5
  // make a new array of things in the order
  // assign new order to the customer object
  // display the cusomer order

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

function displayCustomerOrder() {
  document.getElementById("customerOrder").innerHTML =
    "Customer order: " + customer.order
}

document.getElementById("customerButton").onclick = generateCustomerOrder

// TRANSACTIONS //

let cash = 0

function displayCash() {
  document.getElementById("cash").innerHTML = "Cash: " + cash
}

displayCash()

function fillOrder() {

  // loop through the customer order array
  // if product in stock, sell it to them and keep track of sale
  // if out of stock, trigger alert
  // add sale total to cash
  // clear the customer order
  // display new stock and cash totals

  let saleTotal = 0
  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]

    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    }
    else {
      alert("I'm sorry, we're out of " + productName)
    }
  }
  cash += saleTotal
  customer.order = []
  displayProducts()
  displayCash()
  displayCustomerOrder()

}

document.getElementById("fillOrder").onclick = fillOrder



// UTIL

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}