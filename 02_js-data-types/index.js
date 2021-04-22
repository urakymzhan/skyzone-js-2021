// Primitives Data Types
// - Numbers
// - Strings
// - Boolean
// - null
// - undefined
// - Symbol

// ARRAYS -------

// 1. way of creating an array
// var days = new Array();
// 2. way of creating an array
// var days = [];

// arrays of strings
var days = ['Monday', 'Tuesday', 'Sunday'];

// array of numbers
var years = [2020, 2021];

// array of mixed data types
var mixed = ['Monday', 2020, 'Sunday', 2021, true, false];

// arrays length
console.log('Lenght of days array:', days.length);
console.log('Lenght of years array:', years.length);
console.log('Lenght of mixed array:', mixed.length);

// index vs length
// ['Monday', 'Tuesday', 'Sunday']
// index 0=Monday,  1=Tuesday,  2=Sunday => 2
// length 1=Monday, 2=Tuesday, 3=Sunday => 3

// Bracket Notation
console.log(mixed[0]); // Monday
console.log(mixed[4]); // true

console.log('------------------');
// loops and array
for (var i = 0; i <= mixed.length; i++) {
  console.log(mixed[i]); // 0, 1, 2, ... 5
}

var arr = [];
arr[0] = 1;
arr[8] = 8;

console.log(arr); // [1, empty*7 ,8]
console.log(arr[2]); // undefined
console.log(arr[10]); // undefined

// update a value
arr[0] = 0;
console.log(arr);

// built-in
// push
var arr2 = [];
arr2.push('Happy Wednesday');
arr2.push('Happy Thursday');
arr2.push('Happy Friday');
console.log(`arr2`, arr2);
// pop
arr2.pop(); // remove last element from array
console.log(`arr2`, arr2);

// Activity Array

// array of fav bands
// var favouritesBands = ['Metallica', 'Rolling Stone', 'Rammstein'];
// // we have to ask user their fav band via prompt
// var userInput = prompt('What is your favourites Bands');
// // add users band to my favorite bands
// favouritesBands[favouritesBands.length] = userInput;
// // favouritesBands.push(userInput);
// // console the whole array
// for (var i = 0; i < favouritesBands.length; i++) {
//   console.log(`bands`, favouritesBands[i]);
// }

// OBJECTS ------------------
// var person = {};
// var person = new Object();
// key-pair

// person.name = 'Ulan';
// person.occupation = 'teacher';
// person.gender = 'male';

var person = {
  name: 'Ulan',
  gender: 'male',
  occupation: null,
};
console.log(person);

// Bracket Notation - objects
console.log(person['name']);
console.log(person['gender']);
console.log(person['occupation']);

// Dot Notation - objects
console.log(person.name);
console.log(person.gender);
console.log(person.occupation);

// add object props.
person.weight = 170;
console.log(person);

// update object props.
person.name = 'Rick';
console.log(person);

// delete object props.
delete person.occupation;
console.log(person);

// array of Objects

var gandalf = {
  name: 'Gandlaf',
  gender: 'male',
  age: 11000,
};

var arrayOfObject = ['Text', 123, true, gandalf];

// index
console.log(arrayOfObject[3].name);

// pop
// var gandalf2 = arrayOfObject.pop(); // it takes last element
// console.log(gandalf2.name);

// loop - we assume there is only one object in array
for (var i = 0; i < arrayOfObject.length; i++) {
  if (typeof arrayOfObject[i] === 'object') {
    console.log(arrayOfObject[i].name);
  }
}

// Activity
var user = {
  name: 'John',
  lastName: 'Doe',
};
user.name = 'Chris';
delete user.lastName;
user.interests = ['reading', 'singing', 'rugby'];
console.log(`user.interests`, user.interests);
// looping through array inside an object
// console.log(`length`, user.length);
for (let i = 0; i < user.interests.length; i++) {
  console.log(user.interests[i]);
}
