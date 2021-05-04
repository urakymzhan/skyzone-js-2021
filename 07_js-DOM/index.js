// Intro

// console.log(document);
// console.log(document.documentElement); // html
// console.log(document.body); // body
// console.log(document.head); // head
// console.log(document.title); // title of the document

// Accessing a DOM

// 1. getElementById()
const contentTitle = document.getElementById('title');
console.log(`contentTitle`, contentTitle);

// 2. getElementByClassName()
const des = document.getElementsByClassName('description');
console.log('description', des[0]);

// ex2:
const fruitsListItems = document.getElementsByClassName('fruit');
// console.log('fruits', fruitsListItems);
// for (let i = 0; i < fruitsListItems.length; i++) {
//   console.log(fruitsListItems[i]);
// }

// 3. getElementsByTagName()
const fruitsListItems2 = document.getElementsByTagName('li');
console.log('fruits2', fruitsListItems2);
// for (let i = 0; i < fruitsListItems2.length; i++) {
//   console.log(fruitsListItems2[i]);
// }

// 4. querySelector()
// will return the first met element
const fruitsListItems3 = document.querySelector('li');
console.log('fruits3', fruitsListItems3);

const googleDivClass = document.querySelector('.box');
const googleDivId = document.querySelector('#box2');
// const googleDivTag = document.querySelector('div');

console.log(`googleDivClass`, googleDivClass);
console.log(`googleDivId`, googleDivId);
// console.log(`googleDivTag`, googleDivTag);

// Hierarchical
const anchorTag = document.querySelector('.box a');
console.log(`anchorTag`, anchorTag);

// Combined
const googleCombined = document.querySelector('div.box');
console.log(`googleCombined`, googleCombined);

// 4.1 querySelectorAll()
const fruitsListItems4 = document.querySelectorAll('li');
console.log('fruits4', fruitsListItems4);
// for (let i = 0; i < fruitsListItems4.length; i++) {
//   console.log(fruitsListItems4[i]);
// }

// Activity: Accessing a DOM
// Create 5 HTML elements of choice.
// 1. getElementById
// 2. getElementByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll

/**
 * Change DOM Nodes
 */
// Dot notation
const appleEl = document.querySelector('#appleImg');

console.log(`appleEl.src`, appleEl.src);
console.log(`appleEl.id`, appleEl.id);
console.log(`appleEl.alt`, appleEl.alt);

appleEl.src =
  'https://images.heb.com/is/image/HEBGrocery/000320625-1?$article%2D235%2Dsquare$';

appleEl.alt = '3 apples';

console.log(`appleEl.src`, appleEl.src);
console.log(`appleEl.alt`, appleEl.alt);

// getAttribute and setAttribute
console.log(`source`, appleEl.getAttribute('src'));
console.log(`alt`, appleEl.getAttribute('alt'));

appleEl.setAttribute(
  'src',
  'https://www.friedas.com/wp-content/uploads/2012/05/Friedas-Crab-Apples.jpg'
);
appleEl.setAttribute('alt', '4 apples');

console.log(`source`, appleEl.getAttribute('src'));
console.log(`alt`, appleEl.getAttribute('alt'));
