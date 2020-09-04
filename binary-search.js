// Binary search notes

const bSearch = (arr, target) => {
  let startInd = 0
  let endInd = arr.length - 1

  while (startInd <= endInd) {
    console.log('Running')
    const midInd = startInd + Math.floor((endInd - startInd) / 2)

    if (target === arr[midInd]) {
      return midInd
    }

    if (arr[midInd] < target) {
      startInd = midInd + 1
    } else {
      endInd = midInd - 1
    }
  }
  return -1
}

// linear

const linSearch = (n, arr) => {
  console.log(n, array) //1
  for (let i = 0; i < arr.length; i++) {
    //1
    if (n == arr[i]) return i //n
  }
  return `number not found, count` //1
}
