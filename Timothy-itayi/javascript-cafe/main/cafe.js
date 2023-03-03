// -- JAVASCRIPT CAFE! -- //

let products = {

    whiteCoffee: {
        stock : 4,
        price: 4,
    },

    blackCoffee: {
       stock: 7,
       price: 3.5,
   },


    muffin: {
       stock : 4,
       price: 4,
},

    eggs: {
       stock: 7,
       price: 3.5,
}

}

function displayproduct() {

     document.getElementById("whiteCoffee").innerHTML = "white Coffee: " + 
    products.whiteCoffee.stock

     document.getElementById("blackCoffee").innerHTML = "black Coffee: " + 
      products.blackCoffee.stock
 
      document.getElementById("muffin").innerHTML = "muffin: " + 
      products.muffin.stock

      document.getElementById("eggs").innerHTML = "eggs: " + 
      products.eggs.stock


}

displayproduct()


//-----CUSTOMERS-----///

    let customer = {
        order:[]
    }

    let minOrderSize = 1
    let maxOrderSize = 5

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function generateCustomerOrder() {
        // get a random size for the order in a range , 1-5
        // make a new array of things they're ordering 
        // assign the new order to the customer object
        // display the customer order 


        let orderSize = 4;
        let newOrder = [];
            
    let productNames = Object.keys(products)

    for (let i = 0; i < orderSize; i++) {
        let productIndex = getRandomInt(0, productNames.length - 1);
        let productName = productNames[productIndex];
        newOrder.push(productName);
        
        
    } 

        customer.order = newOrder
        displayCustomerOrder()



    }

    function displayCustomerOrder(){
    document.getElementById("CustomerOrder").innerHTML = "Customer Order:" + 
    customer.order

    }

    document.getElementById("customerButton").onclick = generateCustomerOrder

    // - - TRANSACTIONS - - // 
    let cash = 0 

    function displayCash () {
        document.getElementById("Cash").innerHTML = "Cash" + cash 
    }




        

function fillOrder() {
  // loop through the customer order array
  // if we have their product in stock , sell it to them , and keep track of the
  //sale
  // if we dont have it , alert we're out of this product
  // display the new totals

  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i];

    if (products[productName].stock > 0) {
        products[productName].stock--;
        saleTotal += products[productName].price;
    } else {
        alert("I'm sorry, we're out of " + productName);
    }
}

cash += saleTotal;
customer.order = [];


displayCash();
displayCustomerOrder();
}

document.getElementById("fillOrder").onclick = fillOrder;


    displayproduct()
    displayCash()
    displayCustomerOrder()
  


      