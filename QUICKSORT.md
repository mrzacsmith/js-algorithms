## Quicksort notes

Uses a pivot, first index and then creates a smaller chunk array, pivot or center array, and larger array.

[ ] create sort function that takes in an array parameter
[ ] copy the array to copiedArray = [...arr]
[ ] use if to check copiedArray.length as an exit mechanism to end recursion
[ ] construct arrays for smallerElementsArray, biggerElementsArray, and centerElementArray and the pivot item which is first index using shift() and assign that value to centerElementsArray[]
[ ] use a while loop while copiedArray.length is truthy. Each itereation will slice off first index, each iteraton getting smaller.
[ ] create a currentElement assigned copiedArray.shift()
[ ] create if / else if / else to check if currentElement == pivotElement => centerElementsArray.push(currentElemet), the >, < >
[ ] create 2 new arrays that = the sort(smallerElementsArray) and finallay return smallerSorted and concat.(center, bigger)
