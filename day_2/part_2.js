const fs = require("fs")

function isSafeWithDampener(data) {
  if (isSafe(data)) return true

  /** Try that array with slicing the current index everytime to see if a combination passes the tests */
  for (let i = 0; i < data.length; i++) {
    if (isSafe([...data.slice(0, i), ...data.slice(i + 1)])) {
      return true
    }
  }

  return false
}

function isSafe(data) {
  let currentMode = ''
  let currentDiffer = Math.abs(data[0] - data[1])

  if (currentDiffer > 3 || currentDiffer < 1) return false

  if (data[0] > data[1]) {
    currentMode = 'DEC'

  } else if (data[0] < data[1]) {
    currentMode = 'INC'
  }

  for (let i = 1; i < data.length - 1; i++) {
    const dif = Math.abs(data[i] - data[i + 1])
    const difference = data[i] > data[i + 1] ? 'DEC' : 'INC'
    if (dif > 3 || dif === 0 || difference != currentMode) {
      return false
    }
  }

  return true
}

function main() {
  const inp = fs.readFileSync('./input.txt').toString()

  const processedInput = inp.split('\n').map((line) => (line.split(' ').map((d) => parseInt(d))))

  return processedInput.reduce((previousValue, value) => {
    if(isSafeWithDampener(value)) {
      // return previousValue++ does not increment
      return previousValue + 1
    }
    return previousValue
  }, 0)
}

console.log(main())