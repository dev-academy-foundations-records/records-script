// -- JAVASCRIPT CAFE! -- //

//Products

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

//Display stock function

function displayProducts() {
  document.getElementById(
    'whiteCoffee'
  ).innerHTML = `White Coffee: ${products.whiteCoffee.stock}`
  document.getElementById(
    'blackCoffee'
  ).innerHTML = `Black Coffee: ${products.blackCoffee.stock}`
  document.getElementById(
    'muffin'
  ).innerHTML = `Muffin: ${products.muffin.stock}`
  document.getElementById('eggs').innerHTML = `Eggs: ${products.eggs.stock}`
}

displayProducts()

//customers
let customer = {
  order: [],
}
let food = Object.keys(products)

let minOrderSize = 1
let maxOrderSize = 5
let orderSize = 0
let actualOrder = ''

function generateCustomerOrder() {
  // Figure out random size for the order in a range 1 - 5
  orderSize = getRandomInt(minOrderSize, maxOrderSize)
  console.log(orderSize)
  customer.order = []
  // Make a new array of the things they're ordering
  // Assign the new order to the customer object
  for (let i = 0; i < orderSize; i++) {
    customer.order[i] = food[getRandomInt(0, food.length - 1)]
  }
  displayCustomerOrder(customer.order)
}

// display customer order
function displayCustomerOrder(order) {
  //initialise the order
  actualOrder = ''

  // Creating an array of strings that matches the order
  for (let i = 0; i < order.length; i++) {
    //Look at what's in the innerHTML of each food, and grab the stuff before the : to get the actual name
    actualOrder =
      actualOrder +
      ', ' +
      document
        .getElementById(order[i])
        .innerHTML.substring(
          0,
          document.getElementById(order[i]).innerHTML.indexOf(':')
        )
  }
  //Above code adds a ", " before it it, so i'm shortening that here:
  actualOrder = actualOrder.substring(2, actualOrder.length)
  // adding heading
  document.getElementById('customerOrder').innerHTML =
    'Customer Order: ' + actualOrder
  displayCash()
}

document.getElementById('customerButton').onclick = generateCustomerOrder

//transactions
let cash = 0
function displayCash() {
  cash = fillOrder()
  document.getElementById('cash').innerHTML = 'Cash: ' + cash
}

function fillOrder() {
  cash = 0
  for (let i = 0; i < customer.order.length; i++) {
    if (products[customer.order[i]].stock > 0) {
      cash += products[customer.order[i]].price
      products[customer.order[i]].stock--
    } else {
      alert(`Sorry we're out of ${customer.order[i]} !`)
    }
  }
  displayProducts()
  return cash
}

//util
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
