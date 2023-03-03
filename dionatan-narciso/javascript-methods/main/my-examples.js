// Write your two examples here
// This code example is an Array and it is a .filter items method.

let list = [
  { Name: 'Bread', price: 6 },
  { Name: 'Butter', price: 5 },
  { Name: 'Milk', price: 4 },
  { Name: 'Oil', price: 10 },
  { Name: 'Coffee', price: 12 },
  { Name: 'Eggs', price: 8 },
]

let filteredList = list.filter((list) => {
  return list.price <= 5
})

console.log(list)
console.log(filteredList)

//This code example is an Array and it is a .item items method.-
// Used to find an specific item in a list like the one bellow for ex

let items = [
  { Name: 'Cheese', price: 6 },
  { Name: 'Yogurt', price: 5 },
  { Name: 'Water', price: 4 },
  { Name: 'Apple', price: 10 },
  { Name: 'Chocolate', price: 12 },
  { Name: 'Steak', price: 8 },
]

let foundItem = items.find((item) => {
  return item.name === 'Apple'
})

console.log(foundItem)
