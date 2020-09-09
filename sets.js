// A Set is a collection of values (objects, numbers) which forms an entity itself.

// 1: Cartesian Products, basically
//  Time complexity   O(n*m) ~ O(n^2)
//  Space complexity  O(n*m) ~ O(n^2)

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

const colors = ['blue', 'red', 'green']
const sizes = ['s', 'm', 'l']
// console.log(cartProducts(colors, sizes))
