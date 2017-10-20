'use strict';

var x = 1, y = 2, z = 3;
var som;
var resultaat1, resultaat2;

som = x + y;
console.log(som);
som = som + x;
console.log(som);
som += x;
console.log(som);
som++;
console.log(som);
console.log(som++);
console.log(som);
console.log(++som);
console.log(som);

resultaat1 = x + y * z;
console.log("zonder haakjes : " + resultaat1);
resultaat2 = (x + y) * z;
console.log("met haakjes : " + resultaat2);        