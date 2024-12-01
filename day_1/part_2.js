const fs = require('fs')

// Retrieving the input
const inp = fs.readFileSync('./input.txt').toString()

// Needed arrays
const leftList = new Array()
const rightList = new Array()
const similarity = new Array()

// Creating the separate lists
inp.split('\n').forEach((line) => {
  const linePair = line.split('   ')

  leftList.push(parseInt(linePair[0]))
  rightList.push(parseInt(linePair[1]))
})

leftList.forEach((leftValue) => {
  let q = 0

  rightList.forEach((rightValue) => {
    if(leftValue === rightValue) q++
  })

  similarity.push(q * leftValue)
})

console.log(similarity.reduce((value, previousValue) => {
  return value + previousValue
}, 0))