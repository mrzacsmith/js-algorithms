const cRA = require('mzs-randomarray')
// for (let i = 0; i < 5; i++) {
//   console.log(`${i} times`)
// }

// for...in loops through keys of object
const user = {
  name: 'zac',
  age: 31,
  job: 'software engineer',
  state: 'new mexico',
  greet() {
    console.log('hello')
  },
}

// for (const key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(key)
//     console.log(user[key])
//   }
// }

// user.greet()

const numbers = cRA(12)

// for...of loops through values of iterable (array) objects or Objects.entries/.keys/.values
// for (const value of Object.entries(user)) {
//   console.log(value[0])
//   console.log(value[1])
// }

// for (const num of numbers) {
//   console.log(num)
// }

numbers.forEach((num, index) => {
  console.log(num, ':', index)
})
