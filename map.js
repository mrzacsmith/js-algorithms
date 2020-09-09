// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// in a Map, there are many options
//  .set('jessie', {town: 'albuquerue, age: 24})
//  .has('jessie') => true
//  .get('zac') => false
//  .delete('trivi') => false
//  console.log(contacts.size) => 1

let contacts = new Map()
contacts.set('jessie', { town: 'albuquerque', age: 24 })
console.log(contacts.has('jessie'))
contacts.set('brittany', { town: 'my heart', age: 35 })
console.log(contacts.get('brittany'))
console.log(contacts.size)

for (let [key, value] of contacts) {
  console.log(key, value)
}

const names = ['trivi', 'amborsia', 'ashley']
const locations = [
  {
    town: 'grants',
    age: 35,
  },
  { town: 'grants', age: 29 },
  { town: 'grants', age: 31 },
]

for (let i = 0; i < names.length; i++) {
  contacts.set(names[i], locations[i])
  console.log(contacts.size)
}

for (let [key, value] of contacts) {
  console.log(key, value)
}

for (let key of contacts.keys()) {
  console.log(key)
}

for (let value of contacts.values()) {
  console.log(value)
}

console.log(contacts.has(names[1]))
console.log(Array.from(contacts))
console.log(Array.from(contacts.keys()))
console.log(Array.from(contacts.values()))
const arr = Array.from(contacts.values())
console.log('town', arr[0].town)

let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let second = new Map([
  [1, 'uno'],
  [2, 'dos'],
  [3, 'tres'],
])

let merged = new Map([...first, ...second])
console.log(merged.get(1))
console.log(merged.get(2))
console.log(merged.get(3))
