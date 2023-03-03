// -- JAVASCRIPT CAFE! -- //
//PRODUCTS//
let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    stock: 5,
    price: 3,
  },

  sandwich: {
    stock: 9,
    price: 8,
  },

  muffin: {
    stock: 2,
    price: 3.5,
  },

  eggs: {
    stock: 1,
    price: 12.5,
  },
}
// DECLARING FUNCTION FOR DISPLAYING PRODUCTS //
function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'white coffee: ' + products.whiteCoffee.stock

  document.getElementById('blackCoffee').innerHTML =
    'black coffee: ' + products.blackCoffee.stock

  document.getElementById('sandwich').innerHTML =
    'sandwich: ' + products.sandwich.stock

  document.getElementById('muffin').innerHTML =
    'muffin: ' + products.muffin.stock

  document.getElementById('eggs').innerHTML = 'eggs: ' + products.eggs.stock
}
// CALLING THE FUNCTION TO ACTUALLY DISPLAY STOCK //

displayProducts()
// DECLARING VARIABLES FOR WORKING WITH CUSTOMERS //
let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

//DECLARING FUNCTIONS FOR CUSTOMER ORDERS //
function generateCustomerOrder() {
  //make a variable for the random size of the order between our min/max range//
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)
  //get an array of all our product names by pulling the keys out of our products obj//
  let productNames = Object.keys(products)
  //declare a new empty array for our order//
  let newOrder = []
  //a loop to push random products into the customers order//
  for (let i = 0; i <= orderSize; i++) {
    let randomIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[randomIndex]
    newOrder.push(productName)
  }
  //update the customer order based on the order variable we built in the loop//
  customer.order = newOrder
  //display the updated customer order//
  displayCustomerOrder()
}
//generateCustomerOrder()//
//DECLARING FUNCTION FOR DISPLAYING CUSTOMER ORDER//
function displayCustomerOrder() {
  //converts the customer orders array into a string so we can display it//
  let orderString = customer.order.join(' ')

  document.getElementById('customerOrder').innerHTML =
    'customer order: ' + orderString
}
//DECLARING A FUNCTION FOR CLEARING CUSTOMER ORDER //
function clearCustomerOrder() {
  customer.order = []
  document.getElementById('customerOrder').innerHTML = 'customer order: '
}
//BINDING ONCLICK BUTTON TO GENERATE A CUSTOMER ORDER//
document.getElementById('customerButton').onclick = generateCustomerOrder

//DECLARING A VARIABLE FOR YOUR CASH FLOAT //
let cash = 0.0
//DECLARING A FUNCTION FOR INCREASING YOUR CASH FROM A SALE //
function increaseCash(amount) {
  cash += amount
}
//DECLARING A FUNCTION TO DISPLAY YOUR CURRENT CASH //
function displayCash() {
  document.getElementById('cash').innerHTML = 'cash: ' + cash
}
//CALLING THE FUNCTION TO DISPLAY CASH//
displayCash()
//DECLARING A FUNCTION TO FILL THE CUSTOMERS ORDER //
function fillOrder() {
  //A VARIABLE FOR KEEPING TRACK OF THE TOTAL COST OF THE SALE//
  let saleTotal = 0
  //A LOOP FOR DECREASING OUR STOCK AND INCREASING THE COST OF THE TOTAL SALE//
  for (let i = 0; i < customer.order.length; i++) {
    //DECLARING A NEW VARIABLEFOR THE PRODUCT WE ARE CURRENTLY WORKING WITH//
    let productName = customer.order[i]
    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      //INFORM CUSTOMER THAT WE ARE OUT OF PRODUCT//
      alert('I am sorry, we are out of ' + productName + '!')
    }
  }
  //ONCE THE LOOP IS DONE, ADD THHE SALES TOTAL TO OUR CASH//
  increaseCash(saleTotal)
  //CLEAR THE CUSTOMER ORDER//
  clearCustomerOrder()

  cash += saleTotal
  customer.order = []
  //DISPLAY THE UPDATED CASH AND PRODUCT AMOUNTS//
  displayProducts()
  displayCash()
  displayCustomerOrder()
}
//BINDING ONCLICK BUTTON TO FILL THE CUSTOMER ORDER//
document.getElementById('fillOrder').onclick = fillOrder

//GENERATING RANDOM NUMBER//

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
