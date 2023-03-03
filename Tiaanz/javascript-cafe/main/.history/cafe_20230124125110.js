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
    document.getElementById('whiteCoffee').innerHTML=`WHITE COFFEE STOCK: ${products.whiteCoffee.stock}`
    document.getElementById('blackCoffee').innerHTML=`BLACK COFFEE STOCK: ${products.blackCoffee.stock}`
    document.getElementById('sandwich').innerHTML=`SANDWICH STOCK: ${products.sandwich.stock}`
    document.getElementById('muffin').innerHTML=`MUFFIN: ${products.muffin.stock}`
    document.getElementById('eggs').innerHTML=`EGGS: ${products.eggs.stock}`
}

displayProducts()

/******************** CONTROL *******************/