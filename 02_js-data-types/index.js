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

var name = 'Ulan';

name = 'Ryan';

console.log(`name`, name);
