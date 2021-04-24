// let

// reassignment is possible
let a = 1;
a = 2;
console.log(a);

// block scope
if (true) {
  // block scope
  var name2 = 'Ulan';
  let likes = 'running';
}
console.log(name2);
// console.log(likes);

// hoisting
var b;
console.log(b);
b = 2;

// console.log(c);
// let c = 3;

// const -----

// const myFirstVariableWtithConst = 2021;
// myFirstVariableWtithConst = 2022;
// console.log(myFirstVariableWtithConst);

// console.log(d);
// const d = 2;

// block scope const
if (true) {
  // block scope
  var name3 = 'Ulan';
  let likes = 'running';
  const skills = 'JavaScript and React';
}
// console.log(name3);
// console.log(skills);

// Activity on const & let
const statuses = [
  { code: 'OK', response: 'Request  successful' },
  { code: 'FAILED', response: 'There  was an error with  your  request' },
  { code: 'PENDING', response: 'Your  reqeust is still  pending' },
];
let message = '';
const currentCode = 'OK';
for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
    console.log(message);
  }
}

// Template Literals
const student = 'John';
const teacher = 'Mrs.Elany';

let message2 = student + ' is ' + teacher + "'s favorite students";
console.log(message2);
let message3 = `${student} is ${teacher}'s favorite student`;
console.log(message3);

let device_id = 26;
let guid = 6543224;
const data = '{device_id : ' + device_id + ' , ' + 'guid:' + guid + '}'; // result:  { device_id : 25 , guid: 654321 }
console.log(data);
// Activity:
const data2 = `{device_id: ${device_id}, guid: ${guid}}`;
console.log(data2);

// Arrow Functions

function myFunction() {
  // code
}

const myFun = (a, b) => {
  // code
};

// omit return keyword

const timeFive = (x) => {
  return x * 5;
};

console.log(timeFive(5));

// Activity arrow functions

function getExamples() {
  return fetch('https://example.com/')
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (response) {
      return response.data;
    })
    .then(function (data) {
      console.log(data);
    });
}

// arrow
// const getExamples = () => {
//   return fetch('https://example.com/')
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((response) => response.data)
//     .then((data) => console.log(data));
// };

// Enhanced Object Literals

let type = 'action';
let year = 2021;
let director = 'Spielberg';

const movie = {
  type: type,
  year: year,
  director: director,
};

const movie2 = {
  type,
  year,
  director,
};

console.log(`movie`, movie);
console.log(`movie2`, movie2);

// Descturing
const obj = { name: 'Mark', lastName: 'Twain', age: 40 };
console.log(`Welcome ${obj.name} ${obj.lastName} ${obj.age}`);

const { name, lastName, age } = obj;
console.log(`Welcome ${name} ${lastName} ${age}`);

const obj2 = {
  name: 'Mark',
  lastName: 'Twain',
  age: 40,
  interests: {
    one: 'skiing',
    two: 'hiking',
  },
};
const { one, two } = obj2.interests;
// console.log(obj2.interests.one);
// console.log(obj2.interests.two);
console.log(one);

// const arr = [1,2,3];
// const [a, b, c] = arr;

// loop and object
console.log(obj.length);
// for in
for (let key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
// array loop
var arrayOfMixed = [1, 2, 'hero', true];
// for of
for (let element of arrayOfMixed) {
  if (element === 'hero') {
    console.log('found you');
  }
}
// for loop
for (let i = 0; i < arrayOfMixed.length; i++) {
  if (arrayOfMixed[i] === 'hero') {
    console.log('found you');
  }
}

// Default values
function xyz(a = 'John', b = []) {
  console.log(a);
  b.push(a);
  console.log(b);
}

xyz();

// Rest Operators ...
// elements -> []

const sum = (...myargs) => {
  // Rest operators collects the values and store them in array
  console.log(myargs);
};

sum(1); // [1]
sum(1, 2); // [1,2]
sum(1, 2, 3); // [1,2,3]

function multiply(multiplier, ...theArgs) {
  // code
  console.log('multiplier', multiplier);
  console.log('rest of arguments', theArgs);
  let result = [];
  for (let i = 0; i < theArgs.length; i++) {
    result.push(theArgs[i] * multiplier);
  }
  return result;
}

let arr = multiply(2, 15, 25, 42);
console.log(arr);

// Spread Operator ...
// [] -> elements

const books = [
  'Don Quixote',
  'The Hobbit',
  'Alice in Wonderland',
  'Tale of Two Cities',
];

console.log(...books);

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);
// console.log(['ulan', ...arr2]);
