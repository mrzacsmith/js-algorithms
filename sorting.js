// 2: Quicksort (uses recursion to improve Big O)

const sort = (array) => {
  const copiedArray = [...array]

  if (copiedArray.length <= 1) return copiedArray

  const smallerElementsArray = []
  const largerElementsArray = []
  const pivotElement = copiedArray.shift()
  const centerElementsArray = [pivotElement]

  while (copiedArray.length) {
    const currentElement = copiedArray.shift()
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement)
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement)
    } else {
      largerElementsArray.push(currentElement)
    }
  }
  const smallerElementsSortedArray = sort(smallerElementsArray)
  const largerElementsSortedArray = sort(largerElementsArray)
  return smallerElementsSortedArray.concat(
    centerElementsArray,
    largerElementsSortedArray
  )
}

const sortedArray = sort([5, -10, 10, -3, -1, 20, 100, -3, 19])
// const sortedArray = sort([5, 10, -3])
console.log(sortedArray)

// 1: Bubble sort
// Time compexity
//    Best case: sorted and O(n)
//    Average case:
//    Worst case: O(n^2) ~~ nested loops without reducing, 1 loop O(n), 2 loops O(n^2), 3 loops O(n^3)

// const sort = (arr) => {
//   const resultArray = [...arr]
//   for (let outer = 0; outer < resultArray.length; outer++) {
//     let outerElement = resultArray[outer]

//     for (let inner = outer + 1; inner < resultArray.length; inner++) {
//       let innerElement = resultArray[inner]
//       console.log('OUTER LOOP')
//       console.log(outerElement)
//       if (outerElement > innerElement) {
//         console.log('INNER LOOP')
//         console.log('outerElement', outerElement)
//         console.log('innerElement', innerElement)
//         resultArray[outer] = innerElement
//         resultArray[inner] = outerElement
//         // console.log(resultArray)

//         outerElement = resultArray[outer]
//         innerElement = resultArray[inner]
//         console.log('INSIDE IF')
//         console.log(resultArray)
//       }
//       console.log('END OF INNER LOOP')
//       console.log(resultArray)
//     }
//   }

//   return resultArray
// }

// // const sortedArray = sort([5, -10, 10, -3, -1, 20, 100, 19])
// const sortedArray = sort([5, 10, -3])
// console.log(sortedArray)