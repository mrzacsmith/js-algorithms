// #4 Write 2 functions, the first takes an array and returns min; the second return true is number is even and false if odd
// min => O(n) for best, avg, and worst
// isEven => O(1)

const numbers = [6, 7, 3, 13, 9]

const min = (array) => {
  let minValue = array[0]
  for (let i = 0; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i]
    }
  }
  return minValue
}

console.log(min(numbers))

const isEven = (n) => {
  if (n % 2 === 0) {
    return true
  }
  return false
}

console.log(isEven(4)) // true
console.log(isEven(5)) // false

// 3: Primality Test => can only be divided by 1 and its self
// isPrime(9) = false, isPrime(5) = true

// const isPrime = (n) => {
//   for (let i = 2; i < n; i++) {
//      console.log('Running')
//     if (n % i === 0) {
//       return false
//     }
//   }

//   return true
// }

// const isPrime = (n) => {
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     console.log('Running')
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrime(5))
// console.log(isPrime(273))

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
