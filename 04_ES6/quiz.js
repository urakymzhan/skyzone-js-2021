console.log(`---------- quiz -----------`);

// 1
const KEY = 'white_rabbit'; // global scope
if (true) {
  // const and let are block scope elements
  const KEY = 'ginger_rabbit'; // local/block scope
}
console.log(KEY);

// 2
let x = 42; // global scope
if (true) {
  let x = 1337; // block scope
}
console.log(x);

// 3
let x = 42;
if (true) {
  // it is still getting hoisted but javasciprt doesn't allow to use before it is initializated
  console.log(x);
  let x = 1337;
}

//
var score = [12, 7, 14];
console.log(...score); // [] => value spread opertaor

// rest operator
Math.max(12, 7, 14); // 14

var { foo, bar } = {
  foo: 'FOO',
  bar: 'BAR',
};

console.log({ foo, bar }); // works
console.log(foo); // FOO
console.log(bar); // BAR
