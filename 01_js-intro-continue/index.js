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

// Activity if/else & LO
var tem = 40;
if (tem < 0) {
  console.log('Stay Inside');
} else if (tem > 60 && tem <= 80) {
  console.log('Wear a short');
} else if (tem > 80) {
  console.log('Wear a short and a hat');
} else {
  console.log('Wear whatever you like');
}

// Activity
// var eatSteak = prompt('Do you want to eat a steak?');
// if (eatSteak === 'yes') {
//   document.write("Here's a Steak San");
// } else if (eatSteak === 'no') {
//   document.write("Here's a Tofu");
// } else {
//   document.write('No response from user!');
// }

// LOOPS
// a. While Loop ----------------
// syntax
var age = 20;
while (age < 23) {
  console.log(age); // infinite loop
  age++; // increment
  // 1.loop => age 20
  // 2.loop => age 21
  // 3.loop => age 22
  // 4.loop => age 23 < 23 => stops on this loop
}
console.log(`------`);
var age2 = 20;
while (age2 > 18) {
  console.log(age2);
  age2--; // decrement
  // 1.loop => age 20
  // 2.loop => age 19
  // 3.loop => age 18 > 18 => stops here
}

// b. do While Loop ----------------
var val = 10;
do {
  // it gets executed at least once
  console.log('This is ten');
} while (val === 11);

// c. For Loop ----------------

for (var i = 0; i < 5; i++) {
  console.log(i);
  // 1.loop i = 0
  // 2.lop i = 1
  // 3.loop i = 2
  // 4. loop i = 3
  // 5. loop i = 4
  // 6. loop i = 5 => stop here
}
