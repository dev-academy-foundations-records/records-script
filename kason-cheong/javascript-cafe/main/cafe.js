// -- JAVASCRIPT CAFE! -- //

// PRODUCTS //
let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
    wholesaleCost: 2,
  },

  blackCoffee: {
    stock: 7,
    price: 3.5,
    wholesaleCost: 2,
  },

  muffin: {
    stock: 5,
    price: 8.5,
    wholesaleCost: 4,
  },

  eggs: {
    stock: 1,
    price: 12.5,
    wholesaleCost: 6,
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

displayProducts()

// --CUSTOMERS-- //

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
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
  document.getElementById('customerOrder').innerHTML =
    'Customer Order: ' + customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

// -- TRANSACTIONS -- //
let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash: ' + cash
}

displayCash()

function fillOrder() {
  let saleTotal = 0
  let refundChance = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]

    if (products[productName].stock > 0) {
      products[productName].stock--
      switch ((refundChance = getRandomInt(1, 5))) {
        case 1:
          alert(
            'The customer was unhappy about the food and demanded a refund...'
          )
          saleTotal = 0
          break
        default:
          saleTotal += products[productName].price
      }
    } else {
      alert("I'm sorry, we're out of " + productName)
    }
  }

  cash += saleTotal
  customer.order = []

  displayProducts()
  displayCash()
  displayCustomerOrder()
  outOfStockColor()
}

document.getElementById('fillOrder').onclick = fillOrder

// -- OUT OF STOCK -- //

function outOfStockColor() {
  if (products.whiteCoffee.stock < 1) {
    document.getElementById('whiteCoffee').style.color = 'red'
  } else document.getElementById('whiteCoffee').style.color = ''
  if (products.blackCoffee.stock < 1) {
    document.getElementById('blackCoffee').style.color = 'red'
  } else document.getElementById('blackCoffee').style.color = ''
  if (products.muffin.stock < 1) {
    document.getElementById('muffin').style.color = 'red'
  } else document.getElementById('muffin').style.color = ''
  if (products.eggs.stock < 1) {
    document.getElementById('eggs').style.color = 'red'
  } else document.getElementById('eggs').style.color = ''
}

// -- RESTOCK -- //

document.getElementById('restockWhiteCoffee').onclick = restockWhiteCoffee
function restockWhiteCoffee() {
  if (cash >= products.whiteCoffee.wholesaleCost) {
    cash -= products.whiteCoffee.wholesaleCost
    products.whiteCoffee.stock++
  }
  if (cash < products.whiteCoffee.wholesaleCost) {
    alert('You do not have enough money!')
  }
  displayProducts()
  displayCash()
  outOfStockColor()
}
document.getElementById('restockBlackCoffee').onclick = restockblackCoffee
function restockblackCoffee() {
  if (cash >= products.blackCoffee.wholesaleCost) {
    cash -= products.blackCoffee.wholesaleCost
    products.blackCoffee.stock++
  }
  if (cash < products.blackCoffee.wholesaleCost) {
    alert('You do not have enough money!')
  }
  displayProducts()
  displayCash()
  outOfStockColor()
}
document.getElementById('restockMuffin').onclick = restockMuffin
function restockMuffin() {
  if (cash >= products.muffin.wholesaleCost) {
    cash -= products.muffin.wholesaleCost
    products.muffin.stock++
  }
  if (cash < products.muffin.wholesaleCost) {
    alert('You do not have enough money!')
  }
  displayProducts()
  displayCash()
  outOfStockColor()
}
document.getElementById('restockEggs').onclick = restockEggs
function restockEggs() {
  if (cash >= products.eggs.wholesaleCost) {
    cash -= products.eggs.wholesaleCost
    products.eggs.stock++
  }
  if (cash < products.eggs.wholesaleCost) {
    alert('You do not have enough money!')
  }
  displayProducts()
  displayCash()
  outOfStockColor()
}

// --UTIL-- //

function getRandomInt(min, max) {
  min - Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
