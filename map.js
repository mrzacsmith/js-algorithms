// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

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
