// 2: Return nth number of fibonacci sequence such that 1, 1, 2, 3, 5, 8, 13, ...
// T = n = O(n)

// const fib = (n) => {
//   const numbers = [1, 1]
//   let count = 0
//   for (let i = 2; i <= n; i++) {
//     numbers.push(numbers[i - 2] + numbers[i - 1])
//     count++
//   }
//   console.log('count', count, 'n', n)
//   return numbers[n]
// }

// console.log(fib(4))
// console.log(fib(7))

// 1: Write algorithm that takes an array as an input and calculates the sum of those numbers
// function sumOfArray(array) { ??? }
// sumOfArray([1,3,10]) = 14
// T = n = O(n)

// sumArray = [1, 3, 10, 50]

// function sumOfArray(array) {
//   let sum = 0

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i]
//   }
//   return sum
// }

// console.log(sumOfArray(sumArray))
