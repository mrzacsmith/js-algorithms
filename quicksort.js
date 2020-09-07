const cRA = require('mzs-randomarray')
const arrayToBeSorted = cRA(40)
console.table(arrayToBeSorted)

const sort = (arr) => {
  let copiedArray = [...arr]

  if (copiedArray.length <= 1) return copiedArray

  const smallerElementsArray = []
  const biggerElementsArray = []
  const pivotElement = copiedArray.shift()
  const centerElementsArray = [pivotElement]
  while (copiedArray.length) {
    const currentElement = copiedArray.shift()
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement)
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement)
    } else {
      biggerElementsArray.push(currentElement)
    }
  }

  const smallerElementsSortedArray = sort(smallerElementsArray)
  const biggerElementsSortedArray = sort(biggerElementsArray)
  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  )
}

console.log(sort(arrayToBeSorted))
