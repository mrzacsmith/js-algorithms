const cRA = require('mzs-randomarray')
const arrayToBeSorted = cRA(40)
console.table(arrayToBeSorted)

// const sort = arr => {
//   let copiedArray = [...arr]

//   if (copiedArray.length <= 1) return copiedArray

//   const smallerElementsArray = []
//   const centerElementsArray = []
//   const biggerElementsArray = []
//   const pivotElements = copiedArray.shift()

// }

// console.log(sort(arrayToBeSorted));
