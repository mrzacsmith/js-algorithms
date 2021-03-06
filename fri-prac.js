// #3 Bubble sort
const cRA = require('mzs-randomarray')
const needsSorting = cRA(12)
console.table(needsSorting)

const sort = (arr) => {
  let resultArray = [...arr]

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer]
    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner]

      if (outerEl > innerEl) {
        resultArray[outer] = innerEl
        resultArray[inner] = outerEl

        outerEl = resultArray[outer]
        innerEl = resultArray[inner]
      }
    }
  }
  return resultArray
}

console.table(sort(needsSorting))

// ------------------------------- random array generator ---------------
// created NPM package mzs-randomArray

// const randArr = []

// const arrLength = (range) => {
//   return Math.floor(Math.random() * range) + 3
// }
// const arrValues = () => {
//   return Math.floor(Math.random() * 500) - 30
// }

// const createRandArray = (n, cb = arrValues) => {
//   let max = arrLength(n)
//   for (let i = 0; i < max; i++) {
//     let ran = cb()
//     randArr.push(ran)
//     console.log(randArr)
//   }
//   return randArr
// }

// console.log('new array', createRandArray(18))
// // ----------------------------------- random array generator --------------
// const sortedArray = createRandArray(15)
// console.log(sortedArray)
// #2

// console.log(board1)
// console.log(board2)

// #1 Phone number word decorder
// Create a program that converts a phone number with letters to one with only numbers.
// All inputs will be formatted as a string representing a proper phone number in the format XXX-XXX-XXXX or (XXX)XXX-XXXX, using numbers and capital letters.
// Number	Letter
// 0	none
// 1	none
// 2	ABC
// 3	DEF
// 4	GHI
// 5	JKL
// 6	MNO
// 7	PQRS
// 8	TUV
// 9	WXYZ
// Examples
// textToNum("123-647-EYES") ➞ "123-647-3937"

// textToNum("(325)444-TEST") ➞ "(325)444-8378"

// textToNum("653-TRY-THIS") ➞ "653-879-8447"

// textToNum("435-224-7613") ➞ "435-224-7613"

const textToNum = (phone) => {
  // create an object key are letters of alphabet, value is a number of key
  let obj = {
    A: 2,
    B: 2,
    C: 2,
    D: 3,
    E: 3,
    F: 3,
    G: 4,
    H: 4,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 6,
    N: 6,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 8,
    U: 8,
    V: 8,
    W: 9,
    X: 9,
    Y: 9,
    Z: 9,
  }
  // solution string
  let solution = ''
  // for...of char looping through phone array
  for (char of [...phone]) {
    // use true to add the alpha char conversion to solution
    if (obj[char]) {
      solution += obj[char]
      console.log('if solution', solution)
    } else {
      // add the numeric char
      solution += char
      console.log('else solution', solution)
    }
  }

  return solution
}

// console.log(textToNum('123-647-EYES'))
// console.log(textToNum('(325)444-TEST'))
// console.log(textToNum('(345)EYE-TEST'))
