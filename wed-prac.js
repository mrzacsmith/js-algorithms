// #2
// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.There are no characters in this string that do not repeat.
// Input/Output

// [execution time limit] 4 seconds (js)
// [input] string sA string that contains only lowercase English letters.Guaranteed constraints:
// 1 ≤ s.length ≤ 105.
// [output] char
// The first non-repeating character in s, or '_' if there are no characters that do not repeat.

// #1
// You work in a factory, and your job is to take items from a conveyor belt and pack them into boxes. Each box can hold a maximum of 10 kgs. Given an array containing the weight (in kg) of each item, how many boxes would you need to pack all of the items?
// boxes([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2]) ➞ 5

// Box 1 = [2, 1, 2, 5] (10kg)
// Box 2 = [4, 3] (7kg)
// Box 3 = [6, 1, 1] (8kg)
// Box 4 = [9] (9kg)
// Box 5 = [3, 2] (5kg)

// always 1 item and weighs <= 10
// const boxes = (weights) => {
//   let sol = 0
//   let boxWeight = 0
//   // loop through weights
//   for (i = 0; i < weights.length; i++) {
//     // test as stated above
//     if (boxWeight <= 10) {
//       // add each weight to boxWeight
//       boxWeight += weights[i]
//       //console.log(boxWeight)
//       // reject if > 10
//       if (boxWeight > 10) {
//         boxWeight = 0
//         i--
//         sol++
//       }
//     }
//   }
//   return sol + 1
// }

// console.log(boxes([2, 1, 2, 5]))
