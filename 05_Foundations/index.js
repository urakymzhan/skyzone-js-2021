// Hoisting
// Scope
// Closure

function initilizeData() {
  var myVar = 1;
  return {
    getVar: function () {
      return myVar;
    },
    setVar: function (val) {
      myVar = val;
    },
  };
}

obj = initilizeData();
obj.getVar();
obj.setVar(10);
obj.getVar();

// setTimeout, clearTimeout and setInterval, clearInterval

// Activity ---------------
// Q1
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
// Hint: use setInterval
// Hint: use clearInterval

// function printNumbers(from, to) {
//   const interval = setInterval(() => {
//     console.log(from);
//     if (from === to) {
//       clearInterval(interval);
//     }
//     from++;
//   }, 1000);
// }

// printNumbers(0, 5);

// let from = 1;
// let to = 5;

// function printNumbers(from, to) {

//   setTimeout(function run() {
//     console.log(from);
//     if(from < to) {
//       setTimeout(run, 1000);
//     }
//     from++;
//   }, 1000);
// }

// printNumbers(0, 5);

// let i = 0;
// setTimeout(() => console.log(i), 100); // ? asynchro

// // assume that the time to execute this function is > 100ms
// for (let j = 0; j < 100000000; j++) {
//   i++;
// }

// Q3
// Write a script to print the message “Hello World” every second, but only 5 times. After 5 times, the script should print 	the message “Done” and let the Node process exit.
// Constraints: You cannot use a setTimeout call for this challenge.
// Hint: You need a counter.
let counter = 0;
const intervalId = setInterval(() => {
  console.log('Hello World');
  counter += 1;
  if (counter === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 1000);

// debugger

// this, call, bind, apply

// use strict
