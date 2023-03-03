// Write your two examples here
let jihoProducts = [
  {
    name: 'laptop',
    value: 240.99,
    stock: '1',

  },
  {
    name: 'coffee',
    value: 5.50,
    stock: '5',

  },
  {
    name: 'table',
    value: 59.99,
    stock: '3',

  }
]

// Array Method - Push
function addProduct(obj) {
  jihoProducts.push(obj)
  return jihoProducts
}

// Array Method - Pop
function removeProduct(arr) {
  arr.pop();
  return arr;
}

// String Method - length
function strLength(str) {
  return str.length;
}

// String Method - uppercase, lowercase
function toCase(name) {
  return name.toLowerCase() + "-" + name.toUpperCase();
}

// String Method - CharAt
function charIndex(...str) {
  let strings = [...str];
  return strings.map(el => el.charAt(0)).join('-').toUpperCase();
}

// Object Methotd - Keys
function getObjKeys(obj) {
  return Object.keys(obj);
}

// Object Method - Entries
function getObjEntry(obj) {
  return Object.entries(obj)
}

// Math Method - Floor
function getFloorNum(num) {
  return Math.floor(num);
}

// Math Method - Random
function getRandomNum() {
  return Math.random()
}

// Math Method - Floor + Random
function getRandomFloorNum(product) {
  return product[Math.floor(Math.random() * product.length)]
}



// Console result
console.log("Initialized Array is:", jihoProducts);

let iphone = {
  name: 'iphone',
  value: '99.99',
  stock: '0',
}

// new iPhoe product abject is pushed to Products array
const pushToArray = addProduct(iphone);
console.log("push Result:", pushToArray);

// remove last product(iPhone) from products array
const popToArray = removeProduct(jihoProducts);
console.log("Pop Result:", popToArray);

// Check length of first product's name.
const checkLength = strLength(jihoProducts[0].name);
console.log("First product name's length is: ", checkLength);

// show both lowercase and uppercase of product
const checkCase = toCase(jihoProducts[1].name);
console.log("Second product name and cases are:", checkCase);

// show initial of products
const checkStrIndex = charIndex(jihoProducts[0].name, jihoProducts[1].name);
console.log("Initial CharAt Strings is:", checkStrIndex);

// show all the products keys in products array
const checkObjKeys = getObjKeys(jihoProducts[0]);
console.log("Product Object Keys are:", checkObjKeys)

// show all the products keys and values in products array
const checkObjEntries = getObjEntry(jihoProducts[0]);
console.log("Product Object Entries are:", checkObjEntries);

// check the product price as floor number
const checkFloorNum = getFloorNum(jihoProducts[0].value);
console.log("First Product's Price as floor number is:", checkFloorNum);

// create random number
const randomNum = getRandomNum()
console.log("Random number:", randomNum)

// select random product in products array
const checkRandomProduct = getRandomFloorNum(jihoProducts);
console.log("Random Product is:", checkRandomProduct);
