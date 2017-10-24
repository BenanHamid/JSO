'use strict';

var x = 1, y = 2, z = 3;
var som;
var resultaat1, resultaat2;

som = x + y;
console.log(som); // 3
som = som + x;
console.log(som); // 4
som += x;
console.log(som); // 5
som++; // увеличава числото с единица
som--; // намалява числото с единица

// съшо така е важно позицията на ++-теб, погледни учебника и редовете 19, 21

console.log(som); // 6
console.log(som++); // 6    //postfix
console.log(som); // 7
console.log(++som); // 8    //prefix
console.log(som); // 8

resultaat1 = x + y * z;
console.log("zonder haakjes : " + resultaat1); // 7
resultaat2 = (x + y) * z;
console.log("met haakjes : " + resultaat2);    // 9    