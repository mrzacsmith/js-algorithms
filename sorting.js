// 1: Bubble sort

const sort = (arr) => {
  const resultArray = [...arr]
  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerElement = resultArray[outer]

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerElement = resultArray[inner]

      if (outerElement > innerElement) {
        resultArray[outer] = innerElement
        resultArray[inner] = outerElement
        console.log(resultArray)

        outerElement = resultArray[outer]
        innerElement = resultArray[inner]
      }
    }
  }

  return resultArray
}

const sortedArray = sort([5, 10, -3, -1, 19, 100, 19])
console.log(sortedArray)
