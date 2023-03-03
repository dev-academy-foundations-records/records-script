// -- JAVASCRIPT CAFE! -- //

// PRODUCTS //

let products = {
  whitecoffee: {
    stock: 4,
    price: 4,
  },

  blackcoffee: {
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

// DISPLAY PRODUCTS //

function displayproducts() {
  document.getElementById('whitecoffee').innerHTML =
    'White Coffee: ' + products.whitecoffee.stock

  document.getElementById('blackcoffee').innerHTML =
    'Black Coffee: ' + products.blackcoffee.stock

  document.getElementById('muffin').innerHTML =
    'Muffins: ' + products.muffin.stock

  document.getElementById('eggs').innerHTML = 'Eggs: ' + products.eggs.stock
}

displayproducts()

// CUSTOMERS //

let customer = {
  order: [],
}

let minordersize = 1
let maxordersize = 5

// RANDOM CUSTOMER ORDERS //

function generateCustomerOrder() {
  let ordersize = getRandomInt(minordersize, maxordersize)

  let neworder = []

  let productnames = Object.keys(products)

  for (let i = 0; i <= ordersize; i++) {
    let productindex = getRandomInt(0, productnames.length - 1)

    let productname = productnames[productindex]

    neworder.push(productname)
  }

  customer.order = neworder
  displaycustomerorder()
}

// DISPLAY RANDOM CUSTOMER ORDER //

function displaycustomerorder() {
  document.getElementById('customerorder').innerHTML =
    'Customer Order: ' + customer.order
}

// GENERATE NEW CUSTOMER ORDER WITH BUTTON //

document.getElementById('customerbutton').onclick = generateCustomerOrder

let cash = 0

// DISPLAY CASH //

function displaycash() {
  document.getElementById('cash').innerHTML = 'Cash: ' + cash
}

displaycash()

// ADDING SALES TOTALS AND SUBTRACTING STOCK //

function fillorder() {
  let saletotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productname = customer.order[i]

    if (products[productname].stock > 0) {
      products[productname].stock--
      saletotal += products[productname].price
    } else {
      alert("OH NO! It seems we're all out of " + productname)
    }
  }

  cash += saletotal
  customer.order = []

  // DISPLAYING EVERYTHING //

  displayproducts()
  displaycash()
  displaycustomerorder()
}

document.getElementById('fillorder').onclick = fillorder

// RANDOM NUMBER GENERATOR //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
