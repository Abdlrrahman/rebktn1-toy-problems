/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function(x, y) {
  for (var i = 1; i < y; i ++) {
    x += x;
  }
  return x;
};

var divide = function(x, y) {
  var count = 0;
  while (x > 1) {
    x -= y;
    count++;
  }
  return count;
};

var modulo = function(x, y) {
  while (x >= 0) {
    if ( x === 0 || x === 1) {
      return x;
    }
    else {
      x -= y;
    }
  }
};

