// 1: liner search fucntion before review, O(n) worst case
//
// const array = [3, 10, -3, 48, 5, 33, 99]

let numArray = [-1, 0, 3, 4, 9, 12]

const bSearch = (arr, target) => {
  let startInd = 0
  let endInd = arr.length - 1

  while (startInd <= endInd) {
    const midInd = Math.floor((endInd - startInd) / 2)

    if (target === arr[midInd]) {
      return midInd
    }

    if (arr[midInd] < target) {
      startInd
    }
  }
}

console.log(bSearch(numArray, 9))

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

// const linSearch = (n, arr) => {
//   console.log(n, array) //1
//   for (let i = 0; i < arr.length; i++) {
//     //1
//     if (n == arr[i]) return i //n
//   }
//   return `number not found, count` //1
// }

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
