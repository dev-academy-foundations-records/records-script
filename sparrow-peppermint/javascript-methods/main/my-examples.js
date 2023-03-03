// Write your two examples here

// -- EXAMPLE 1 -- //

//.sort()
// This method sorts elements in an array.
// It sorts strings alphabetically

const electricMayhem = ['Dr. Teeth',  'Zoot',  'Animal',  'Floyd',  'Janice',]

const sort = (array) => array.sort()

// if we want to sort integers by value we need to add a comparison function

const numberList = [150, 32, 345, 1, 95, 40]

const sortNumbers = (array) => array.sort((a,b)=>a-b)

// -- EXAMPLE 2 -- //

// String.split()
// This method seperates a string into an array of multiple strings, using the given seperator

const waterType = "Squirtle, Totodile, Mudkip, Piplup"
const chooseOne = waterType.split(", ")


// -- calling the functions -- //

const sortElectricMayhem = sort(electricMayhem)
console.log(`sortElectricMayhem: `, sortElectricMayhem)
const sortNumberList = sortNumbers(numberList)
console.log(`sortNumberList: `, sortNumberList)

console.log(`waterTypeSplit`, chooseOne)
