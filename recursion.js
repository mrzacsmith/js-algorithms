// Using dynamic programmig to improve recursive big O.
// Time complexity is O(n)

// let count = 0
// const fib = (n, memo) => {
//   count++
//   let result
//   if (memo[n]) return memo[n]
//   if (n === 0 || n === 1) {
//     result = 1
//   } else {
//     result = fib(n - 1, memo) + fib(n - 2, memo)
//   }
//   memo[n] = result
//   return result
// }

// const memo = {} // to view the store of memo
// fib(5, memo)
// console.log(count)
// console.log(memo)
// count = 0

// fib(5, {})
// console.log(count)
// count = 0
// fib(10, {})
// console.log(count)
// count = 0
// fib(15, {})
// console.log(count)
// count = 0
// fib(20, {})
// console.log(count)
// count = 0

// Review of fibonacci using recursion
// Time complexity: there are 9 function calls for fib(4), 15 function calls for fib(5), 25 function calls for fib(6)   [1,1,2,3,5,8,13,21]
// loop-based O(n)
// fib(4) = 5   => 9
// fib(5) = 8   => 15 + 6
// fib(6) = 13  => 25 + 10
// fib(7) = 21  => 41 + 16
// fib(8) = 34  => 67 + 26
// fib(9) = 55  => 109 + 43
// fib(10)= 89  => 177 + 67

// let count = 0
// const fib = (n) => {
//   count++
//   if (n === 0 || n === 1) return 1

//   return fib(n - 1, count) + fib(n - 2, count)
// }

// console.log('=', fib(20), 'count:', count)

// 1: Rewrite the factorial function using recursion
// Time complexity = O(n)

// const fact = (n) => {
//   if (n === 1) return 1
//   return n * fact(n - 1)
// }

// console.log(fact(3))
// console.log(fact(4))
// console.log(fact(5))
