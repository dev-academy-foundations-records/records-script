// Write your two examples here
// I thought it would be interesting to look at methods that may be used in genetic sequencing. For example, code that could cut out a piece of gentetic data (called .splice) and code that could look at how many times a certain DNA segment repeats itself - the way repitions of code can indicate Huntington's Disease (called .search)

//String slice()
// A string slice allows you to return a slice of code, like taking a slice of cheesecake.
//slice takes 2 parameters start point and end point (does not include the endpoint)

const dnaSequence = 'TGGATGGATGCATGCATGTGCGCGTATCGCGCATGCTAGCTTTACGGACTTGC'

const start = 2
const end = 16

let dnaSlice = dnaSequence.slice(start, end)

console.log(dnaSlice)

//String search
//The search method allows us to seacrh our string to find the location of our search and shows the FIRST location. So if I wanted to check if my dna sequence had a specific portion of dna, I could use this method. I have no doubt this code could be used to then count the number of repetitions for my previous example of Huntington's, but due to time constrants I decided not to go down that rabbit hole right now. It is case sensitive unless otherwise specified
const dnaSequence2 =
  'TGCATCAGCTAGCTAAATCGCGTCGATCGATTAGCTAGGCCCATTTTAGGGCGATCGATCGACTCCCAGTCGATCGCATCGGCACT'
let position = dnaSequence2.search('AAA')

console.log(position)
