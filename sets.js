// A Set is a collection of values (objects, numbers) which forms an entity itself.
// The Set object lets you store unique values of any type, whether primitive values or object references.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// 3: Permutation

const getPermutations = (options, length) => {
  const permutations = []

  if (length === 1) {
    return options.map((option) => [option])
  }

  const partialPermutations = getPermutations(options, length - 1)
  for (const option of options) {
    for (const existingPer of partialPermutations) {
      permutations.push([option].concat(existingPer))
    }
  }
  return permutations
}

const digits = [1, 2, 3, 4]
const resultLength = 3
console.log(getPermutations(digits, resultLength))

// 2: Cartesian products - More than 2 sets
//  Time complexity O(n*m*... ) ~ O(n^x)
//  Space complexity O(n*m) ~ O(n^x)

const cartProducts = (setA, setB) => {
  const product = []
  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl]
    }
    for (const setBEl of setB) {
      // console.log('running')
      product.push([...setAEl, setBEl])
    }
  }
  return product
}

const cartesian = (...sets) => {
  let tempProduct = sets[0]
  // console.log(tempProduct)
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProducts(tempProduct, sets[i])
  }

  return tempProduct
}
const colors = ['blue', 'red', 'green']
const sizes = ['s', 'm', 'l', 'xl']
const styles = ['round neck', 'v neck']

// console.log(cartesian(colors, sizes, styles))

// 1: Cartesian Products, basically
//  Time complexity   O(n*m) ~ O(n^2)
//  Space complexity  O(n*m) ~ O(n^2)

// const cartProducts = (setA, setB) => {
//   const product = []
//   for (const setAEl of setA) {
//     for (const setBEl of setB) {
//       console.log('running')
//       product.push([setAEl, setBEl])
//     }
//   }
//   return product
// }

// console.log(cartProducts(colors, sizes))

// let stuffSet = new Set()

// stuffSet.add(2)
// stuffSet.add(3)
// console.log(stuffSet)
// console.log(stuffSet.has(5))
// console.log(stuffSet.has(3))
// console.log(stuffSet.size)

// const numberArray = [2, 3, 4, 4, 2, 3, 5, 6, 6, 7, 4, 5, 7, 8, 8, 9, 1, 2, 1]
// console.log([...new Set(numberArray)])
