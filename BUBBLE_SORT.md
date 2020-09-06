## Bubble sort notes

- Create a function that takes in an unsorted array
- Create a copy of the array,`const resultArray = [...arr]`

### how does bubble sort work

- It will have two nested loops with the `outer` with an iteration variable that starts at zero and uses the resultArray.length as the condition.
- Second loop will be `inner` and move the second index along each subsequent place. It will use resultArray.length as conditional and the iteration variable will be `inner = outer + 1`.
- In the outer loop we need to define outer element, which is just the index number of the outer loop in the resultArray.
- In the inner loop we need to define inner element, which like above is just the index number of the inner loop in the resultArray.
- This allows the inner loop to move through the array to compare with the non-moving outer index.
- We need a conditional that compares outerEl to the innerEl and if the outerEl is larger, then we need to swap in the `resultsArray[outer]=innerEl`.
- Next we need to swap the outer and inner elements to match.
- Outside of the for loop, return the resultsArray `outerEl = resultsArray[outer]`.

## time complexity

- Because of nest loops the average and worst case tend towards O(n^2)

## code sample

```js
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
```
