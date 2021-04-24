// let

// reassignment is possible
let a = 1;
a = 2;
console.log(a);

// block scope
if (true) {
  // block scope
  var name = 'Ulan';
  let likes = 'running';
}
console.log(name);
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
  var name = 'Ulan';
  let likes = 'running';
  const skills = 'JavaScript and React';
}
// console.log(name);
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
      return response.json();
    })
    .then(function (response) {
      return response.data;
    })
    .then(function (data) {
      console.log(data);
    });
}
