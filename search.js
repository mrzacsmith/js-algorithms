// 1: liner search fucntion before review, O(n) worst case
// binary search is O(log n)
// Best case => exact middle index O(1)
// Worst case => exact start or end O(log n) because it gets split each iteration
// Average case => O(log n)
// const array = [3, 10, -3, 48, 5, 33, 99]
// Review the Master Theorem for Big O of recursive

// let numArray = [-1, 0, 3, 4, 9, 12, 21, 23, 45, 49, 66, 72]

// const recBsearch = (arr, target, offset) => {
//   let startInd = 0
//   let endInd = arr.length - 1

//   const midInd = Math.floor((endInd - startInd) / 2)

//   if (target === arr[midInd]) {
//     return midInd + offset
//   }

//   if (arr[midInd] < target) {
//     startInd = midInd + 1
//     offset = offset + midInd + 1
//   } else {
//     endInd = midInd
//   }
//   return recBsearch(arr.slice(startInd, endInd + 1), target, offset)
// }

// ------------------------- BEST choice for me --------------------------------------

const bSearch = (arr, target) => {
  let startInd = 0
  let endInd = arr.length - 1

  while (startInd <= endInd) {
    console.log('Running')
    const midInd = startInd + Math.floor((endInd - startInd) / 2)

    if (target === arr[midInd]) {
      return midInd
    }

    if (arr[midInd] < target) {
      startInd = midInd + 1
    } else {
      endInd = midInd - 1
    }
  }
  return -1
}

// ---------------------------------------------------------------------------------------------

console.log(bSearch(numArray, 72))
console.log(recBsearch(numArray, 72, 0))

// const bSearch = (nums, target) => {
//   let left = 0
//   let right = nums.length - 1

//   while (left <= right) {
//     const mid = left + Math.floor((right - left) / 2)
//     if (nums[mid] === target) {
//       return mid
//     } else if (nums[mid] < target) {
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }
//   return -1
// }

// console.log(bSearch(numArray, 9))

// ------------------------------------ BEST linear ----------------------------------------
// const linSearch = (n, arr) => {
//   console.log(n, array) //1
//   for (let i = 0; i < arr.length; i++) {
//     //1
//     if (n == arr[i]) return i //n
//   }
//   return `number not found, count` //1
// }

// ------------------------------------------------------------------------------------------

// const forSearch = (n, arr) => {
//   let index = 0
//   for (const item of arr) {
//     if (n === item) return index
//     index++
//   }
//   return `item not found`
// }

// console.log(linSearch(5, array))
// console.log(forSearch(5, array))
