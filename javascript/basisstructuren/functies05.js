'use strict';

function f1(x){
    // bij oproep van een fie wordt voor elke param
    // een nieuwe var gemaakt binnen de fie.
    // op het einde van de fie verdwijnt deze "parametervariabele"
    console.log("x in fie voor wijziging:",x);
    x++;
   console.log("x in fie na wijziging:",x);
}

//(actueel) arg met andere naam dan (formele) param
var w = 1;
console.log("w voor oproep:",w);
f1(w);
console.log("w na oproep:",w);

//(actueel) arg met zelfde naam als (formele) param
var x = 1;
console.log("x voor oproep:",x);
f1(x);
console.log("x na oproep:",x);

// param met zelfde naam als lokale var
// => lokale var wordt gebruikt in fie
function f2(x){
    x = 12;
    // "paramvariabele" x wordt overschreven met lokale var x
    console.log("x in fie2 voor wijziging:",x);
    x++;
   console.log("x in fie2 na wijziging:",x);
}
f2(5);
