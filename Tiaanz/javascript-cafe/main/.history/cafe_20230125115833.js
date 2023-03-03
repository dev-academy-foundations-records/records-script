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
    stock: 1,
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

const historyOrders = [];

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



function displayTransactionHistory() {
    const history = document.querySelector('ul')
    while (history.hasChildNodes()) {
        history.removeChild(history.firstChild);
      }
  
  
    for (let i = 0; i < historyOrders.length; i++) {
        const historyList = document.createElement("li");
        const refundBtn=document.createElement('button')
        historyList.innerHTML = historyOrders[i];
        refundBtn.innerHTML=''
        history.insertBefore(historyList,history.children[0])
  }
}

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
      //declare a variable to count the number of each item in the order 
      let count=0
      customer.order.forEach(item => { item === productName && count++ })
    if (products[productName].stock < count) {
      alert(
        `Sorry, We are out of ${productName} and your order has been cancelled`
      );
      customer.order = [];
      displayCustomerOrder();
      return false;
    }
  }
  return true;
}

function checkMoneyAmount() {
  if (checkOrderFulfillment()) {
    //get a random amount of money for the customer
    const minMoneyAmount = 10;
    const maxMoneyAmount = 30;
    const pocketMoney = getRandomInt(minMoneyAmount, maxMoneyAmount);
    let saleTotal = 0;

    //loop through the customer order array
    for (let i = 0; i < customer.order.length; i++) {
      const productName = customer.order[i];
      if (products[productName].stock > 0) {
        saleTotal += products[productName].price;
      }
    }
    if (saleTotal > pocketMoney) {
      alert(
        `Sorry, your order comes to $${saleTotal} and you only have $${pocketMoney}`
      );
      customer.order = [];
      displayCustomerOrder();
    } else {
      fillOrder();
    }
  }

  function fillOrder() {
    //make a variable to keep track of our sale total
    let saleTotal = 0;
    //loop through the customer order array
    //If we have their product in stock, sell it to them and keep tracking of the sale
    //If we don't have it, alert "we are out of this product"
    for (let i = 0; i < customer.order.length; i++) {
      const productName = customer.order[i];
      if (products[productName].stock > 0) {
        products[productName].stock--;
        if (products[productName].stock === 0) {
          document.getElementById(productName.trim()).style.color = "red";
        }
        saleTotal += products[productName].price;
      } else {
        alert(`Sorry, We are out of ${productName}`);
      }
    }

    //add the sale total to our cash
    cash += saleTotal;
    //add the order to history transactions
    historyOrders.push(customer.order)
    //clear the customer order
    customer.order = [];
    //display the new totals
    displayProducts();
    displayCash();
    displayCustomerOrder();
  }
}

document.getElementById("fillOrderButton").addEventListener("click", () => {
  checkMoneyAmount();
});

document.getElementById("historyButton").addEventListener("click", () => {
  displayTransactionHistory();
});

/************* RESTOCK****************/

function addProduct(productName) {
  if (cash > 0 && products[productName].wholesaleCost < cash) {
    products[productName].stock++;
    if (products[productName].stock > 0) {
      document.getElementById(productName.trim()).style.color = "black";
    }
    cash -= products[productName].wholesaleCost;
    displayProducts();
    displayCash();
  } else {
    alert("Sorry, there is not enough cash.");
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
