// declaring of objects
// 1. literals - not singleton
// 2. constructor
// Object.create() //constructor

// singleton - one obj only one instance (created using constructor)

// Object literals

// symbol
const mySym = Symbol('key1');
// we cannot use symbol directly as a key - if used it takes it as a string
// we've to use this in [mySym]

const js_user = {
  name: 'Saketh',
  'full name': 'Saketh Reddy',
  // mySym: 'mykey1', // string
  [mySym]: 'mykey1',
  age: 21,
  location: 'Hyderabad',
  email: 'saketh@gmail.com',
  isLoggedIn: false,
  lasLoginDays: ['Monday', 'Saturday'],
};

// accessing values
// console.log(js_user.email)
// console.log(js_user['email'])
// console.log(js_user["full name"])
// console.log(js_user[mySym]);// mykey1

// js_user.email = 'saketh@chatgpt.com' // edits the obj
// console.log(js_user)

// Object.freeze(js_user) // freezes the obj
// js_user.email = 'saketh@microsoft.com'
// console.log(js_user)

js_user.greeting = function () {
    console.log('Hello js user');
}

// console.log(js_user.greeting); // [Function (anonymous)]
// console.log(js_user.greeting()); // Hello js user undefined

js_user.greetingTwo = function () {
    console.log(`Hello js user, ${this.name}`);
}

console.log(js_user.greetingTwo()); // Hello js user undefined
