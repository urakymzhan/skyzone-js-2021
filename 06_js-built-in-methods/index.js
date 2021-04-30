/**
 * Number methods
 */

// toString()
let num = 24;
console.log(num.toString()); // "24"
console.log(typeof num.toString()); // string
console.log(typeof num); // number
console.log((2020).toString());
console.log((11 + 13).toString()); // returns 24 from expression 11 + 13

// toExponential();
// return a string
// https://socratic.org/questions/how-does-an-exponential-function-differ-from-a-power-function#:~:text=1%20Answer&text=The%20essential%20difference%20is%20that,3%20is%20a%20power%20function.

let exp = 8;
console.log(exp.toExponential(2)); // 8.00e+0
console.log(exp.toExponential(3)); //
console.log(exp.toExponential(6)); //

// toFixed()
let fxd = 9.656;
console.log(fxd.toFixed()); // 10
console.log(fxd.toFixed(2)); // 9.66
console.log(fxd.toFixed(3)); // same
console.log(fxd.toFixed(4)); // 9.6560

// toPrecision()
let pn = 9.656;
let pn2 = 12.656;
console.log(pn.toPrecision());
console.log(pn.toPrecision(2));
console.log(pn.toPrecision(4));
console.log(pn.toPrecision(6));
console.log(pn2.toPrecision(3));
console.log(pn2.toPrecision(4));

// Number()

let x = true;
console.log(Number(x)); // 1
x = false;
console.log(Number(x)); // 0
x = new Date();
console.log(typeof x);
console.log(Number(x));
x = '10';
console.log(Number(x));
x = '10 20';
console.log(Number(x)); // NaN

// parseInt()
console.log(parseInt('10')); // 10
console.log(parseInt('30 20 10')); // 30
console.log(parseInt('15 years')); // 15
console.log(parseInt('years 15')); // NaN
console.log(parseInt('10.33')); // 10

// parseFloat()
console.log(parseFloat('10')); // 10
console.log(parseFloat('10.33')); // 10.33

// Number Properties

const a = Number.MAX_VALUE;
const b = Number.MIN_VALUE;
const c = Number.NEGATIVE_INFINITY;
const d = Number.POSITIVE_INFINITY;
const e = Number.NaN;

console.log(`a`, a);
console.log(`b`, b);
console.log(`c`, c);
console.log(`d`, d);
console.log(`e`, e);
console.log(`e`, isNaN(e));

// Activity

let foo = 4; // 1
let bar = 4.46731; // 2
let foobar = '4'; // 3

c1 = parseInt(foobar); // 4
foo = foo.toString(); // 5
bar = bar.toFixed(1); // 6
console.log(`foobar - ${c1}, foo - ${foo}, bar - ${bar} `);

/**
 * String methods
 */

// length
const txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const msg = 'A msg';
console.log(txt.length); // 26
console.log(msg.length); // 5

// indexOf()
const sentence1 = "Please locate where 'locate' occurs!";
const pos1 = sentence1.indexOf('locate');
console.log(pos1); // 7
console.log(sentence1.indexOf('e')); // 2
console.log(sentence1.indexOf('p')); // -1

// lastIndexOf()
const sentence2 = "Please locate where 'locate' occurs!";
const pos2 = sentence2.lastIndexOf('locate');
console.log(pos2); // 21
console.log(sentence1.lastIndexOf('e')); // 26

// search() - similar to indexOf()
// but we can provide regex to it
const sentence3 = "Please locate where 'locate' occurs!";
const pos3 = sentence2.search('locate');
console.log(pos3); // 7

// replace()
const microsoft = 'Please visit Microsoft!';
const copyOfMic = microsoft.replace('Microsoft', 'Google');
console.log(copyOfMic);
console.log(microsoft);

const microsoft2 = ' Microsoft';
const copyOfMic2 = microsoft2.replace('M', 'P');
console.log(copyOfMic2);
console.log(microsoft2);

// toUpperCase() and toLowerCase()
let hello = 'Hello World!';
const toLower = hello.toLowerCase();
const toUpper = hello.toUpperCase();
console.log(`toLower`, toLower);
console.log(`toUpper`, toUpper);

// concat()
const he = 'Hello';
const lo = 'World';
console.log(he + ' ' + lo);
console.log(`${he} ${lo}`);
console.log(he.concat(' ', lo));

// charAt()
const ctext = 'HELLO WORLD';
console.log(ctext.charAt(0)); // more advised
console.log(ctext[0]); // may not work in all browsers

// split()
const txt2 = 'hery | b, | c d esas'; // String
console.log(txt2.split(' '));
console.log(txt2.split('|'));
console.log(txt2.split(','));

// endsWith() and startsWidth()
const final = 'I start with I and end with i';
console.log(final.startsWith('I')); // true
console.log(final.endsWith('i')); // true
console.log(final.startsWith('s')); // false
console.log(final.endsWith('w')); // false

// slice()
// you can use negative values (to start from backwards)
const str1 = 'Apple, Banana, Kiwi';
const banana = str1.slice(7, 13);
const rest = str1.slice(7);
console.log(banana);
console.log(rest);

// substring()
// it doens't take negative values
const banana2 = str1.substring(7, 13);
console.log(banana2);

// substr()
const banana3 = str1.substr(7, 6);
console.log(banana3);
console.log(str1.substr(7, 10));
