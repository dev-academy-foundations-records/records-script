// -- JAVASCRIPT CAFE! -- //
let products = {
  whiteCoffee: {
    stock: 84,
    price: 4,
  },

  blackCoffee: {
    stock: 83,
    price: 3,
  },

  muffin: {
    stock: 109,
    price: 3,
  },

  eggs: {
    stock: 88,
    price: 12,
  },
}

function displayproducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee : ' + products.whiteCoffee.stock

  document.getElementById('blackCoffee').innerHTML =
    'blackCoffee : ' + products.blackCoffee.stock

  document.getElementById('muffin').innerHTML =
    'muffin : ' + products.muffin.stock

  document.getElementById('eggs').innerHTML = 'eggs : ' + products.eggs.stock
}

displayproducts()

// Customers //

let Customer = {
  order: [],
}

let minOrderSize = 1
let maxOderSize = 5

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOderSize)
  let newOrder = []
  let productsNames = Object.keys(products) //you can get the product name in a arry

  for (let i = 0; i <= orderSize; i++) {
    let productsIndex = getRandomInt(0, productsNames.length - 1)
    let productsName = productsNames[productsIndex]
    newOrder.push(productsName)
  }
  Customer.order = newOrder
  displayCustomerOrder()
}
generateCustomerOrder() //need to call the function

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer Order : ' + Customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

//--- TRANSACTOion---//

let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash : ' + cash
}
displayCash()

function fillOrder() {
  // loop thru rhe customer order array
  //if we have stock
  //

  let saleTotal = 0

  for (let i = 0; i < Customer.order.length; i++) {
    let productName = Customer.order[i]
    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert("i'm sorry, we're out of " + productName)
    }
  }
  cash += saleTotal
  Customer.order = []
  displayproducts()
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
