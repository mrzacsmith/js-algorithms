// A Set is a collection of values (objects, numbers) which forms an entity itself.

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
