// -- JAVASCRIPT CAFE! -- //

// ----- Products ------ //

let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
    wholeSale: 1.5,
  },

  blackCoffee: {
    stock: 7,
    price: 3.5,
    wholeSale: 2,
  },

  muffin: {
    stock: 5,
    price: 8.5,
    wholeSale: 4,
  },

  eggs: {
    stock: 1,
    price: 12.5,
    wholeSale: 6,
  },
}

function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    '$' +
    products.whiteCoffee.price +
    ' White Coffee: ' +
    products.whiteCoffee.stock

  document.getElementById('blackCoffee').innerHTML =
    '$' +
    products.blackCoffee.price +
    '0 Black Coffee: ' +
    products.blackCoffee.stock

  document.getElementById('muffin').innerHTML =
    '$' + products.muffin.price + '0 Muffin: ' + products.muffin.stock

  document.getElementById('eggs').innerHTML =
    '$' + products.eggs.price + '0 Eggs: ' + products.eggs.stock
}

displayProducts()
let customerCash

//  ---- CUSTOMERS ----- //

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  // get a random order in a range 1 - 5
  // Make a new array of strings containing the order
  // asign new order to customer object
  // display the customer order

  let orderSize = getRandomInt(minOrderSize, maxOrderSize)
  customerCash = getRandomInt(20, 65)

  let newOrder = []
  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
  }

  customer.order = newOrder
  document.getElementById('customerCash').innerHTML =
    'Customer cash: $' + customerCash
  displayCutomerOrder()
}

function displayCutomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

// -- TRANSACTIONS -- //

let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash: $' + cash
}

displayCash()

function fillOrder() {
  let saleTotal = 0
  let itemsInStock = []

  document.getElementById('customerCash').innerHTML = 'Customer cash: '

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]

    if (products[productName].stock > 0) {
      products[productName].stock--
      itemsInStock.push(productName)
      saleTotal += products[productName].price
    } else {
      alert("I'm sorry, we're out of " + productName)
    }
  }

  // create a cash amout random between x and y
  // check if customer cash is above sale total render code below
  // if its not loop thorugh the array and add each item stock back

  if (customerCash < saleTotal) {
    for (let i = 0; i < itemsInStock.length; i++) {
      let productName = itemsInStock[i]
      products[productName].stock++
    }
    alert('Customer has insufficient funds')
    customer.order = []
    displayProducts()
    displayCutomerOrder()
    noStock()
  } else {
    cash += saleTotal
    customer.order = []
    displayProducts()
    displayCash()
    displayCutomerOrder()
    noStock()
  }
}

document.getElementById('fillOrder').onclick = fillOrder

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function noStock() {
  // assign a variable to the product names
  // loop through the object stock
  // if stock is zero add class .red to the p element of id product name
  let productNames = Object.keys(products)

  for (let i = 0; i < productNames.length; i++) {
    if (products[productNames[i]].stock === 0) {
      document.getElementById(productNames[i]).classList.add('red')
    } else {
      document.getElementById(productNames[i]).classList.remove('red')
    }
  }
}

function restock(key) {
  if (cash >= products[key].wholeSale) {
    products[key].stock++
    cash -= products[key].wholeSale
    displayProducts()
    displayCash()
    noStock()
  }
}
