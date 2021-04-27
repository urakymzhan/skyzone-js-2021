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

// call, bind, apply
