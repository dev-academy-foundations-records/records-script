// -- JAVASCRIPT CAFE! -- //

//PRODUCTS

let products = {
  WhiteCoffee: {
    stock: 4,
    price: 4,
  },

  BlackCoffee: {
    stock: 4,
    price: 3.5,
  },

  Muffins: {
    stock: 15,
    price: 3.5,
  },

  Eggs: {
    stock: 4,
    price: 2,
  },

  Butter: {
    stock: 6,
    price: 1,
  },
}

function displayProducts() {
  document.getElementById('whitecoffee').innerHTML =
    'White Coffee ' + products.WhiteCoffee.stock
  document.getElementById('blackcoffee').innerHTML =
    'Black Coffee ' + products.BlackCoffee.stock
  document.getElementById('muffins').innerHTML =
    'Muffins ' + products.Muffins.stock
  document.getElementById('eggs').innerHTML = 'Eggs ' + products.Eggs.stock
  document.getElementById('butter').innerHTML =
    'Butter ' + products.Butter.stock
}

displayProducts()

// -- customers -- //

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrdersize = 5

function GenerateCustomerOrder() {
  // get a random sized order in a range between 1-5
  // make a new array of the things the customers are ordering
  // assign the new order to the customer object
  // display the customer order

  let orderSize = getRandomInt(minOrderSize, maxOrdersize)

  let newOrder = []

  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productindex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productindex]
    newOrder.push(productName)
  }

  customer.order = newOrder
  displayCustomerOrder()
}

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

document.getElementById('customerButton').onclick = GenerateCustomerOrder

//transaction

let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash: ' + cash
}

displayCash()

function fillOrder() {
  //make a variable to keep track of our sale total
  //loop through the customer order array
  // if we have their product, sell and keep track of sale.
  // if we don't, then alert, we are out of this product.
  //add sale total to our cash
  //clear the customer order
  //display the new totals

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
// -- UTIL -- //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
