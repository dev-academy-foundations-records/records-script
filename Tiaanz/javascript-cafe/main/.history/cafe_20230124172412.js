// -- JAVASCRIPT CAFE! -- //

/********************PRODUCT CONTROL *******************/

//Declaring variables for the product objects//

const products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
    wholesaleCost: 2,
  },

  blackCoffee: {
    stock: 5,
    price: 3,
    wholesaleCost: 1.5,
  },

  sandwich: {
    stock: 9,
    price: 8,
    wholesaleCost: 5,
  },

  muffin: {
    stock: 2,
    price: 3.5,
    wholesaleCost: 2,
  },

  eggs: {
    stock: 0,
    price: 12.5,
    wholesaleCost: 6,
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
    const productIndex = getRandomInt(0, productNames.length - 1);
    const productName = productNames[productIndex];
    newOrder.push(productName);
  }
  //assign the new order to the customer object
  customer.order = newOrder;
}

generateCustomerOrder();

function displayCustomerOrder() {
  //dsiplay the customer order
  const customerOrder = document.getElementById("customerOrder");
  customerOrder.innerHTML = `CUSTOMER ORDER:${customer.order}`;
}

const generateCustomer = document.getElementById("customerButton");
generateCustomer.addEventListener("click", () => {
  generateCustomerOrder();
  displayCustomerOrder();
});

/*********** TRANSACTIONS **************/

let cash = 0;

function displayCash() {
  document.getElementById("cash").innerHTML = `CASH: ${cash}`;
}

function checkOrderFulfillment() {
    for (let i = 0; i < customer.order.length; i++) {
        const productName = customer.order[i];
        if (products[productName].stock <= 0) {
            alert(`Sorry, We are out of ${productName}`);
            return false
        } 
    }
   return true
}



function checkMoneyAmount() {

    if (checkOrderFulfillment()) {
        
    }
  
   
  
}

document.getElementById("fillOrderButton").addEventListener("click", () => {
  console.log(checkOrderFulfillment())
});



/************* RESTOCK****************/

function addProduct(productName) {
  if (cash > 0 && products[productName].wholesaleCost<cash ) {
      products[productName].stock++;
      if (products[productName].stock > 0) {
        document.getElementById(productName.trim()).style.color = "black";
      }
    cash -= products[productName].wholesaleCost;
      displayProducts();
      displayCash()
  } else {
      alert("Sorry, there is not enough cash.")
  }
}

const restockBtns = document.querySelectorAll(".restock");

for (let x of restockBtns) {
  x.addEventListener("click", (e) => {
    addProduct(e.target.classList[1]);
  });
}

//----UTIL----//
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
