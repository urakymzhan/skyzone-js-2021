const _ = require("lodash");

var arr = [1, [2, [3, [4]], 5]];

const flattetArr = _.flattenDeep(arr);

console.log(flattetArr); // [ 1, 2, 3, 4, 5 ]
