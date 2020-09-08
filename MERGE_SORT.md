## Merge sort notes

Always split in middle or as close as possible until 2 element array, then sort and merge.

[ ] create sort function that takes an array as parameter
[ ] create consts middle, leftArr, rightArr where middle is Math.floor(arr.length/2), leftArr arr.slice(0, middle), rightArr arr.slice(middle)
[ ] create if arr.length < 2, return arr
[ ] create if arr.length === 2, return arr sorted
[ ] create leftSorted and rightSorted arr pass sort recursively
[ ] create new mergedArr and a left and right index = 0
[ ] create sorted merge using a while loop
