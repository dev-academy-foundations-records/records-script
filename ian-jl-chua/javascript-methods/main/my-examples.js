// Write your two examples here

// 1) obtaining the types of fruits in a fruit basket.

const fruitBasket = [
  { name: 'banana', price: 3.7 },
  { name: 'apple', price: 2 },
  { name: 'orange', price: 2.5 },
]
// calling this function (in this case .map is the function) and console logging it

const lookInFruitBasket = fruitBasket.map((fruit) => fruit.name)
console.log('basket consist of :', lookInFruitBasket)

// 2) if we are finding a specific word in a document.

const paragraph =
  'This is a really short paragraph that I am only using as an example. I have no idea what I am writing about or where I am going with this.'

function findThisWord(word) {
  if (paragraph.includes(word)) {
    return 'word exist'
  } else {
    return 'no such word'
  }
}
// calling this function and console logging it
const foundWord = findThisWord('short')
console.log(foundWord)
