// Create an array of objects

const guitarSales = [
  {
    model: 'Telecaster',
    price: 1200,
    customers: 15,
  },
  {
    model: 'Stratocaster',
    price: 1500,
    customers: 30,
  },
  {
    model: 'Les Paul',
    price: 2000,
    customers: 10,
  },
]

/* In this first example I used the .map() method. The .map() method basically allows you to iterate through an array and apply a callback function to each element without having to use loops. It also creates 
a new array with the modified elements. As you can see below, it can be used to apply some sort of procedure or modification to the elements of an array and store these changes in a new array. In this code
I'm iterating through my array of objects and at each element in my array, I'm multiplying the price with the customer count to give me the total amount made.
*/

let moneyMade = guitarSales.map((guitars) => guitars.price * guitars.customers)

console.log(moneyMade)

/*
Here I used the .find() method. The .find() method similar to .map() will iterate through an array. However it will instead return the first value that satisfies the given callback function. Here, I want to find out about the sales
of my 'Les Paul' guitar model. By using the .find() method I'm able to find the first element in my array that has the model name 'Les paul'. This can be used when you want to pick out any element in an array
 by a specific propery value. Also if the condition is not met by any of the elements, it returns 'undefined'.
 */

let Stratocasterprice = guitarSales.find(
  (guitars) => guitars.model == 'Les Paul'
)

console.log(Stratocasterprice)
