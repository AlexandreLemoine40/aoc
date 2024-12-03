const fs = require("fs")

const inp = fs.readFileSync('./input.txt').toString()

let safeLists = 0

inp.split('\n').forEach((line) => {
  const data = line.split(' ').map((d) => parseInt(d))

  let currentMode = ''

  let currentDiffer = Math.abs(data[0] - data[1])

  if(currentDiffer > 3 || currentDiffer < 1) return

  if(data[0] > data[1]) {
    currentMode = 'DEC'
    
  } else if(data[0] < data[1]) {
    currentMode = 'INC'
  }

  for(let i = 1 ; i < data.length - 1 ; i++) {
    const dif = Math.abs(data[i] - data[i + 1])
    if(dif > 3 || dif < 1) return
    const difference = data[i] > data[i+1] ? 'DEC' : 'INC'
    if(difference != currentMode) return
  }

  safeLists++
})

console.log(safeLists)