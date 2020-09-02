// HackerRank Mark and Toy in Javascript

// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

// Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if  and Mark has  to spend, he can buy items  for , or  for  units of currency. He would choose the first group of  items.

// Function Description

// Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.

// maximumToys has the following parameter(s):

// prices: an array of integers representing toy prices
// k: an integer, Mark's budget
// Input Format

// The first line contains two integers,  and , the number of priced toys and the amount Mark has to spend.
// The next line contains  space-separated integers

// Constraints

// A toy can't be bought multiple times.

// Output Format

// An integer that denotes the maximum number of toys Mark can buy for his son.

// Sample Input

// 7 50
// 1 12 5 111 200 1000 10
// Sample Output

// 4
// Explanation

// He can buy only  toys at most. These toys have the following prices: .

// ++++++++++++++++++++++++++++++++++++ solution +++++++++++++++++++++++++++
const prices = [1, 12, 5, 111, 200, 1000, 10]

function maximumToys(prices, k) {
  prices.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  })
  // prices.sort((a, b) => a - b)

  let counter = 0
  let total = 0

  for (let i = 0; i < prices.length; i++) {
    total += prices[i]
    if (total > k) return counter
    counter++
  }
  return counter
}

console.log('hello')
console.log(maximumToys(prices, 50))
