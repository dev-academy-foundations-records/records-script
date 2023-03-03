// -- JAVASCRIPT CAFE! -- //

/********************PRODUCT CONTROL *******************/

//Declaring variables for the product objects//

const products = {
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
};

//declaring function for displaying products
function displayProducts() {
  document.getElementById(
    "whiteCoffee"
  ).innerHTML = `WHITE COFFEE STOCK: ${products.whiteCoffee.stock}`;
  document.getElementById(
    "blackCoffee"
  ).innerHTML = `BLACK COFFEE STOCK: ${products.blackCoffee.stock}`;
  document.getElementById(
    "sandwich"
  ).innerHTML = `SANDWICH STOCK: ${products.sandwich.stock}`;
  document.getElementById(
    "muffin"
  ).innerHTML = `MUFFIN: ${products.muffin.stock}`;
  document.getElementById("eggs").innerHTML = `EGGS: ${products.eggs.stock}`;
}

displayProducts();

/********************CUSTOMER CONTROL *******************/

//declaring variables for working with customers
const customer = {
  order: [],
};

const minOrderSize = 1;
const maxOrderSize = 5;

function generateCustomerOrder() {
  //get a random size for the order in a range ,1-5
  const orderSize = getRandomInt(minOrderSize, maxOrderSize);

  // make a new array of the things they are ordering
  const newOrder = [];
  const productNames = Object.keys(products);

  for (let i = 0; i < orderSize; i++) {
    const productIndex = getRandomInt(0, productNames.length-1);
    const productName = productNames[productIndex];
    newOrder.push(productName);
  }
  //assign the new order to the customer object
    customer.order = newOrder;
   
}

generateCustomerOrder();


function displayCustomerOrder() {
    //dsiplay the customer order
    const customerOrder = document.getElementById('customerOrder')
    customerOrder.innerHTML=`CUSTOMER ORDER:${customer.order}`
}



const generateCustomer = document.getElementById('customerButton')
generateCustomer.addEventListener('click', () => {
    generateCustomerOrder()
    displayCustomerOrder()
})

/*********** TRANSACTIONS **************/





//----UTIL----//
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
