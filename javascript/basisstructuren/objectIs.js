'use strict';

console.log('vergelijken met ==');
console.log('foo'=='foo');     // true
console.log('foo'=='bar');     // false
console.log(null==null);       // true
console.log("2"==2);            // true   !!!

// Special Cases
console.log(0==-0);            // true   !!!
console.log(-0==-0);           // true
console.log(NaN==0/0);         // false   !!!

console.log('vergelijken met ===');
console.log('foo'==='foo');     // true
console.log('foo'==='bar');     // false
console.log(null===null);       // true
console.log("2"===2);            // false !!!

// Special Cases
console.log(0===-0);            // true    !!!
console.log(-0===-0);           // true
console.log(NaN===0/0);         // false   !!!