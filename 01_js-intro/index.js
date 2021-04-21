// ACTIVITY console.log -----------------------
console.log(4 + 3);
// alert(4 + 3);
// document.write(4 + 3);

// STATEMENTS -----------------------
/*
  console.log('Hi There'); // statement 1
  console.log('Cat is beatuful'); // statement 2
  console.log(12); // statement 3
*/
// research about documenation using multiline comment

// VARIABLES -----------------------

var language = 'My favorite language is JavaScript';
console.log(language);
// reassigning a value
language = 'My favortie language is Java';
console.log(language);

var sum = 4 + 3;
console.log(sum);

// declaration and initialization
var box; // declare
box = 2021; // initialize
console.log(box);

// ACTIVITY variables -----------------------
var age = 20;
var year = 2000;
console.log(age, year);
// alert(age, year);
// document.write(age, year);

// DATA TYPES -----------------------
// To check a type of any vafriable use: typeof

// a. Number
var a = 10;
var b = 3;
var summy = a + b; // addition
var subby = a - b; // substraction
var mully = a * b; // multiplication
var divvy = a / b; // division
var moddy = a % b; // modulus

console.log('addition: ', summy);
console.log('substraction: ', subby);
console.log('multiplication: ', mully);
console.log('division: ', divvy);
console.log('modulus', moddy);

// var inc = a++; // post increment
// var dec = b--; // post decrement
// console.log(`inc`, inc);
// console.log(`dec`, dec);
console.log(`a`, a++);
console.log(`b`, b--);

// b. String
// loosly typed language

// var message = 'Dont\'t throw a trash';
// var message = "Dont't throw a trash";

var name = 'Ulan';
var lastName = 'Doe';
var fullName = name + ' ' + lastName;
console.log(fullName);

// Concatate Number and String
var num = 20;
var num2 = 10;
var text = 'Text';

console.log(num + num2 + text); // 20(num) + 10(num) = 30 + Text(string) = 30Text
console.log(text + num + num2); // Text(string) + 20 = Text20 + 10 = Text2010

// c. Boolean
// it only holds 2 values: true or false
var isClassStarted = true;
// var isClassStarted = false;

// Assigment
// Research and read about:
// - null
// - undefined
// We will discuss before the next class

// both of them has no value
// one of them has typeof

// null -> nothing

var nothing = null;

// undefined -> declared but value is not defined
var something;

console.log(`nothing`, nothing);
console.log(`something`, something);

console.log(`type`, typeof nothing); // object
console.log(`type`, typeof something); // undefined

// compare null and undefined
console.log(null == undefined); // compare loosely
console.log(null === undefined); // object === undefined

console.log(10 === '10'); // == loosly comparing
