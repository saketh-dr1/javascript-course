// function
function sayMyName() {
  console.log('Saketh');
}

// sayMyName();

function addTwoNumbers(number1, number2) {
  return number1 + number2;
  console.log('fsad'); // not executed after return statement
}

const result = addTwoNumbers(3, 6);

// console.log('Result:', result);

function loginUserMsg(userName) {
  // default value userName = 'sam'
  if (userName === undefined) {
    // !userName
    console.log('Please enter a username');
    return;
  }
  return `${userName} just logged in`;
}

// console.log(loginUserMsg());

function calculateCartPrice(...num1) {
  // rest operator
  return num1;
}

// console.log(calculateCartPrice(3, 4, 5));

const user = {
  userName: 'DSR',
  age: 22,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.userName} and age is ${anyObject.age}`);
}

// handleObject(user);
handleObject({
  userName: 'DSR',
  age: 22,
});

// arrays
const myNewArray = [200, 400, 500, 900];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
