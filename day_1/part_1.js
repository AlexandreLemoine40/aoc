const fs = require('fs')

// Retrieving the input
const inp = fs.readFileSync('./input.txt').toString()

// Needed arrays
const leftList = new Array()
const rightList = new Array()
const distances = new Array()

// Creating the separate lists
inp.split('\n').forEach((line) => {
  const linePair = line.split('   ')

  leftList.push(parseInt(linePair[0]))
  rightList.push(parseInt(linePair[1]))
})

// Sort the lists
leftList.sort()
rightList.sort()

// Calculating distances
for (let i = 0; i < leftList.length; i++) {
  const distance = leftList[i] - rightList[i]
  distances.push(distance < 0 ? distance * (-1) : distance)
}

// Showing and summing the distances
console.log(distances.reduce((value, previousValue) => {
  return value + previousValue
}, 0))
