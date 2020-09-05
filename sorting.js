// 1: Bubble sort

const sort = (arr) => {
  const resultArray = [...arr]
  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerElement = resultArray[outer]

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerElement = resultArray[inner]
      console.log('OUTER LOOP')
      console.log(outerElement)
      if (outerElement > innerElement) {
        console.log('INNER LOOP')
        console.log('outerElement', outerElement)
        console.log('innerElement', innerElement)
        resultArray[outer] = innerElement
        resultArray[inner] = outerElement
        // console.log(resultArray)

        outerElement = resultArray[outer]
        innerElement = resultArray[inner]
        console.log('INSIDE IF')
        console.log(resultArray)
      }
      console.log('END OF INNER LOOP')
      console.log(resultArray)
    }
  }

  return resultArray
}

// const sortedArray = sort([5, -10, 10, -3, -1, 20, 100, 19])
const sortedArray = sort([5, 10, -3])
console.log(sortedArray)
