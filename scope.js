var c = 300;
let a = 200;
if (true) {
  let a = 10;
  const b = 20;
  var c = 40;
  //   console.log('Inner: ', a); // block scope
}

// console.log(a); // glocal scope 'a'
// console.log(b); // block scope
// console.log(c); // global scope

function one() {
  const username = 'DSR';

  function two() {
    const website = 'youtube';
    console.log(username);
  }
  //   console.log(website);

  two();
}

// one();

if (true) {
  const username = 'Saketh';
  if (username === 'Saketh') {
    const website = ' youtube';
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// +++++ interesting

function addone(num) {
  return num + 1;
}

addone(5);
console.log(addone(6));

const addTwo = function (num) {
  return num + 2;
};

addTwo(6);
