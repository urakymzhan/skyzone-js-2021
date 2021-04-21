//  If the user likes fish (confirmFish===  true), we run the following block of code.

var confirmFish = true; // change it to false to see difference
var fishtype = 'salmon';
var fishtype2 = 'carbs and telapias';

if (confirmFish === true) {
  console.log('You like ' + fishtype + ' !');
}
// confirmFish === true same as confirmFish !== false

if (confirmFish !== false) {
  console.log('You like ' + fishtype2 + ' !');
}

if (10 > 8) {
  console.log('10 is greater than 8');
}

// Activity If Statement & Co
var temperature = 80;
if (temperature > 60) {
  console.log('Its hot outside. Put on a short!');
}

// if/else statement
var num = 4;
if (num > 10) {
  console.log('big number');
} else {
  console.log('little number');
}
// if/elseif/else statement

var num2 = -3;
if (num2 > 10) {
  console.log('big number');
} else if (num2 > 0 && num2 < 10) {
  console.log('little number');
} else {
  console.log('negative numbers');
}

// logical operators
var age = 40;
var yearsAsCitizen = 40;

if (age >= 40 && yearsAsCitizen > 25) {
  console.log('You can run for President');
} else {
  console.log('You are not eligible to run for President');
}
var a = false;
if (!a) {
  console.log('a is not true');
}
if (age >= 60 || yearsAsCitizen >= 25) {
  console.log('You are still eligible');
}
