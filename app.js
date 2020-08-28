// 1: Write algorithm that takes an array as an input and calculates the sum of those numbers
// function sumOfArray(array) { ??? }
// sumOfArray([1,3,10]) = 14
// T = n = O(n)

sumArray = [1, 3, 10]

function sumOfArray(array) {
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

console.log(sumOfArray(sumArray))
