'use strict';

var x,y,z;

x = 10;
y = 3;

console.log(x/y);  // 3.3333333333333335
console.log(x+y);  // 13

y = "3";
console.log(x/y);  // 3.3333333333333335
console.log(x+y);  // 103
 
 // string converteren naar integer (1)
z = parseInt(y);  // z = 3 
console.log(x+z);   // 13

y = "1";
console.log(x+y);   // 101
// string converteren naar integer (2)
z = +y;             // z = 1
console.log(x+z);   // 11
