// 3: merge sort

// 2: Quicksort (uses recursion to improve Big O)
// Time compexity
//    Best case: randomly sorted O(n * log n)
//    Average case: randomly sorts O(n *log n)
//    Worst case: sorted O(n^2)
// recursive call is O(n) but if you loop inside of the recursive call O(n^2)
// Recursive step runtime: O(n^logb(a)) => a = 2, b = 2 => O(n^ log2(2)) => 0(n)
// Runtime outside of loop: O(n)
// Algorithm runtime: O(n^logb(a) * log n) => O(n * log n)

// const sort = (array) => {
//   const copiedArray = [...array]
//   console.log('FUNCTION STARTING')
//   console.log(array)

//   if (copiedArray.length <= 1) {
//     console.log('ONLY ONE ITEM - RETURNING', array)
//     return copiedArray
//   }

//   const smallerElementsArray = []
//   const largerElementsArray = []
//   const pivotElement = copiedArray.shift()
//   const centerElementsArray = [pivotElement]

//   while (copiedArray.length) {
//     const currentElement = copiedArray.shift()
//     if (currentElement === pivotElement) {
//       centerElementsArray.push(currentElement)
//     } else if (currentElement < pivotElement) {
//       smallerElementsArray.push(currentElement)
//     } else {
//       largerElementsArray.push(currentElement)
//     }
//   }

//   console.log('AFTER WHILE LOOP')
//   console.log(smallerElementsArray)
//   console.log(centerElementsArray)
//   console.log(largerElementsArray)
//   const smallerElementsSortedArray = sort(smallerElementsArray)
//   const largerElementsSortedArray = sort(largerElementsArray)
//   return smallerElementsSortedArray.concat(
//     centerElementsArray,
//     largerElementsSortedArray
//   )
// }

// const sortedArray = sort([5, -10, 10, -3, -1, 20, 100, -3, 19])
// const sortedArray = sort([5, -3, 10, -3, -15])
// console.log(sortedArray)

// 1: Bubble sort
// Time compexity
//    Best case: sorted and O(n)
//    Average case: O(n^2)
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
