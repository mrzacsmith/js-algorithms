// A Set is a collection of values (objects, numbers) which forms an entity itself.
// The Set object lets you store unique values of any type, whether primitive values or object references.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// 2: Cartesian products - More than 2 sets
//  Time complexity
//  Space complexity

const cartProducts = (setA, setB) => {
  const product = []
  for (const setAEl of setA) {
    for (const setBEl of setB) {
      console.log('running')
      product.push([setAEl, setBEl])
    }
  }
  return product
}

const cartesian = (...sets) => {
  let tempProduct = sets[0]
  console.log(tempProduct)
  for (const set of sets) {
    // cartProducts(tempProduct, set)
  }
}

cartesian()

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

const colors = ['blue', 'red', 'green']
const sizes = ['s', 'm', 'l', 'xl']
const styles = ['round neck', 'v neck']
// console.log(cartProducts(colors, sizes))

let stuffSet = new Set()

stuffSet.add(2)
stuffSet.add(3)
console.log(stuffSet)
console.log(stuffSet.has(5))
console.log(stuffSet.has(3))
console.log(stuffSet.size)

const numberArray = [2, 3, 4, 4, 2, 3, 5, 6, 6, 7, 4, 5, 7, 8, 8, 9, 1, 2, 1]
console.log([...new Set(numberArray)])
