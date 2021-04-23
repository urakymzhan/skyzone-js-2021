// global
var a = 1;

// 1. function declaration -----
function name() {
  // body of your function
  var b = 2;
  console.log(b);
}
// calling my function
// name();
// name();
// name();

// 2. function expression -----
var name2 = function () {
  var c = 3;
  console.log(c);
};

// name2();
// name2();
// name2();

// Activity
function getSum() {
  // console.log(8 + 10);
  var a = 8;
  var b = 10;
  var sum = a + b;
  console.log(sum);
}
// var getSum = function () {
//   console.log(8 + 10);
// };

// getSum();

// Arguments ----------

function moveRobot(dir, label) {
  console.log(arguments);

  console.log(`direction`, dir);
  console.log('label: ', label);
}
// var direction = 'left';
// moveRobot(direction);
// moveRobot('left', 'car direction');

// default arguments array --------------
function countNumbers(a, b) {
  console.log(arguments);
  // then you can loop and get sum of all arguments
  var sum = a + b; // 1+undefined = NaN
  // console.log(sum);
}
// countNumbers(1); // a=1, b=undefined
// countNumbers(1, 2);
// countNumbers(1, 2, 3, 4, 5, 6, 7);

// Activity
function getProduct(a, b, c, d) {
  // get the product of all four
  var product = a * b * c * d;
  console.log(product);
}

// getProduct(2, 2, 2, 2);
// getProduct(1, 1, 1, 1);
// getProduct(0, 1, 1, 3);
// var a = 1;
// var b = 1;
// var c = 2;
// var d = 2;
// getProduct(a, b, c, d);

// Returning values ---------------
function myName(firstName, middleName, lastName) {
  return middleName;
}
var fn = myName('Mary', 'Eliz', 'Smith');
console.log(fn);
