// is power of two
// const isPower = (n) => {
//   if (n < 1) return false
//   divideNumber = n

//   while (divideNumber !== 1) {
//     if (divideNumber % 2 !== 0) {
//       return false
//     }

//     divideNumber = divideNumber / 2
//   }
//   return true
// }

// const isPower = (n) => {
//   if (n < 1) return false
//   return (n & (n - 1)) === 0
// }

// console.log(isPower(17))
// console.log(isPower(64))

// // min array n
// let num = [4, 5, 6, 10, 3, 88, 54]
// const min = (array) => {
//   let minValue = array[0]

//   for (let i = 0; i < array.length; i++) {
//     if (minValue > array[i]) {
//       minValue = array[i]
//     }
//   }
//   return minValue
// }

// console.log(min(num))

// // factorial
// const fact = (n) => {
//   let result = 1 // 1
//   if (n <= 0) return 0 // 1
//   if (n === 1) return 1 // 1

//   for (let i = 2; i <= n; i++) {
//     // 1
//     result *= i // n
//   }
//   return result // 1
// }
// // 5*4*3*2*1
// console.log('fact', fact(5))

// // sum up to n ~~ O(n)
// const sumUp = (n) => {
//   let result = 0 // 1
//   for (let i = 0; i <= n; i++) {
//     // 1
//     result += i // n
//   }
//   return result // 1
// }

// console.log('sum up', sumUp(5))

// // fibonacci

// const fib = (n) => {
//   let result = [1, 1]
//   for (let i = 2; i <= n; i++) {
//     result.push(result[i - 2] + result[i - 1])
//   }
//   return result[n]
// }

// // [1,1,2,3,5,8,13,21]
// console.log('fib', fib(19))

// // isPrime
// const isPrime = (n) => {
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i === 0) return false
//   }
//   return true
// }

// // const isPrime = (n) => {
// //   for (let i = 2; i < n; i++) {
// //     console.log('Running')
// //     if (n % i === 0) {
// //       return false
// //     }
// //   }

// //   return true
// // }

// console.log('isPrime', isPrime(20))
// console.log('isPrime', isPrime(17))
// console.log('isPrime', isPrime(3))
// console.log('isPrime', isPrime(19))

// // isEven

// const isEven = (n) => {
//   // O(1)
//   return n % 2 === 0
// }

// console.log(isEven(5))
// console.log(isEven(224))
