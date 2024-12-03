const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

let validMultipliers
let doOrder
let dontOrder
let skipNext = false

// The regex has to be stored in a value in order to iterate over the string
// If it is re-instantiated everytime, it will be considered new and don't go through the whole string
const re = /mul\([0-9]{1,3}\,[0-9]{1,3}\)/g

const doRe = /do\(\)/g
const dontRe = /don\'t\(\)/g

let sum = 0

const statements = []

while ((validMultipliers = re.exec(input)) != null) {
  const arr = validMultipliers[0].replace('mul', '').replace('(', '').replace(')', '').split(',').map((n) => parseInt(n))
  statements.push({
    multiplier: arr[0] * arr[1],
    index: validMultipliers.index
  })
}

while ((doOrder = doRe.exec(input)) != null) {
  statements.push({
    order: 'DO',
    index: doOrder.index
  })
}

while ((dontOrder = dontRe.exec(input)) != null) {
  statements.push({
    order: 'DONT',
    index: dontOrder.index
  })
}

statements.sort((a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }

  return 0
})

for (let i = 0; i < statements.length; i++) {
  const current = statements[i]

  if (current.order) {
    skipNext = current.order != 'DO'
  } else if (!skipNext) {
    sum += current.multiplier
  }
}

console.log(sum)
