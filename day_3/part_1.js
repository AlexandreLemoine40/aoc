const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

let validMultipliers

// The regex has to be stored in a value in order to iterate over the string
// If it is re-instantiated everytime, it will be considered new and don't go through the whole string
const re = /mul\([0-9]{1,3}\,[0-9]{1,3}\)/g

let sum = 0

while((validMultipliers = re.exec(input)) != null) {
  const arr = validMultipliers[0].replace('mul', '').replace('(', '').replace(')', '').split(',').map((n) => parseInt(n))
  sum += (arr[0] * arr[1])
}

console.log(sum)