// array - object

const myArr = [1, 2, 3, 4, 5];
const myHeroes = ['adf', 'asdf'];
const myArr2 = new Array(1, 2, 3);

// console.log(myArr2[1]);

// Array Methods

// myArr.push(5) // [ 1, 2, 3, 5 ]
// myArr.push(7) //[ 1, 2, 3, 5 , 7]
// myArr.pop() // [ 1, 2, 3, 5 ]

// myArr.unshift(9) // [ 9, 1, 2, 3, 4, 5 ]
// myArr.shift() // [ 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(5));// false
// console.log(myArr.indexOf(1)); // 2

// const newArr = myArr.join() //1,2,3,4,5
// console.log(newArr);

// console.log(myArr);

// slice and splice

// console.log("A ", myArr)

// const myn1 = myArr.slice(1, 3) // [ 2, 3 ]

// console.log(myn1);
// console.log('B ', myArr);
// const myn2 = myArr.splice(1, 3) // [ 2, 3, 4 ] - manipulates the original array
// console.log("C ", myArr)
// console.log(myn2)

const marvel_heroes = ['thor', 'ironman', 'spiderman'];
const dc_heroes = ['superman', 'flash', 'batman'];

// marvel_heroes.push(dc_heroes) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const all_heroes = marvel_heroes.concat(dc_heroes); // properly merge
// console.log(all_heroes);

// spread

const all_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

other_arr = [1, 2, 3, [4, 5], [6, 7, [4, 6]]];

const another_arr = other_arr.flat(Infinity); // to spread at any depth levels
// console.log(another_arr) // [1, 2, 3, 4, 5,6, 7, 4, 6]

// console.log(Array.isArray(other_arr));// true
// console.log(Array.isArray("Saketh"));// false

// console.log(Array.from('Saketh')); // [ 'S', 'a', 'k', 'e', 't', 'h' ]

// console.log(Array.from({ name: 'Saketh' })); // [] - need to specify what should be spread i.e. key or value

let score1 = 100;
let score2 = 200;

// console.log(Array.of(score1,score2)) // [ 100, 200 ]
