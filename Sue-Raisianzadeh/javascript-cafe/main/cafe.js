// -- JAVASCRIPT CAFE! -- //
//products//

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
    price: 11.5,
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

// displayProducts()

//--customer--//

let customer = {
  order: []
}

let minOrderSize = 1
let maxOrderSize = 10

function generateCustomerOrder() {
  // get a random size for the order in a tange, 1-5
  // make anew array of the things they're ordering
  // assign the new order to the customer object
  // disply the customer order

  let orderSize = getRandomInt(minOrderSize, maxOrderSize);

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
  document.getElementById('customerOrder').innerHTML =
    'Customer Order: ' + customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

//--transaction--//

let cash = 0
function displayCash() {
  document.getElementById('cash').innerHTML = 'cash: $' + cash
}

displayCash()

function fillOrder() {
  // make a variable to keep track of ourcsale total
  // loop through thec customer order array
  // if we have their product in stock,sell it to them, and keep track of the sale
  // if we don't have it, alert we are out of this product
  // add the sale total to our cash
  // clear the customer order
  // display everything

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
  displayCash() 
  displayCustomerOrder()
}

document.getElementById('fillOrder').onclick = fillOrder

displayProducts()


//--UTIL--//

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
