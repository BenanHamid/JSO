'use strict';

const TIEN = 10;
var a = TIEN, b, c;

console.log(b);
if (a++ == TIEN) {
    console.log("a is tien");
}
else {
    console.log("a verschilt van 10");
}
console.log(a);
a=11;
console.log(a + 1 + "2");
console.log("2" * a);
if (isNaN(a / 0)) {
    console.log("in if van isNaN");
}
else {
    console.log("in else van isNaN");
}

c = 1;
var result = "";
switch (c) {
    case 1: result += "Komt dit op het scherm? ";
    case 2: result += "Wat denk je? ";
    default: result += "We zullen zien... ";
}
console.log(result);

b = 2;
c += 5 + b * 3;
console.log(c);

var naam = "Jan";
if (naam == "jan") {
    console.log("het is jan");
}
else {
    console.log("het is jan niet");
}

if ("10" === TIEN) {
    console.log("Je hebt waarschijnlijk geen tien");
}
else {
    console.log("Je hebt misschien tien");
}

var jaar = 2000;
var tmp = jaar%400 == 0 ? "schrikkeljaar" : "geen schrikkeljaar";
var bericht = jaar%4 == 0 ? (jaar%100 == 0 ? tmp :"schrikkeljaar") : "geen schrikkeljaar";
console.log(bericht);

var zijde = 2;
function oppVierkant(zijde){
    var tmp = zijde;
    zijde++;
    return tmp*tmp;
}
var opp = oppVierkant(zijde);
console.log("zijde: %d, opp: %d", zijde, opp);

var z = 3;
function omtrekVierkant(s){
    var z = 4*s;
    return z;
}
var circ = omtrekVierkant(z);
console.log("z: %d, circ: %d", z, circ);

var getal1 = "10";
var getal2 = "2";
if (getal1 < getal2){
    console.log("%s komt voor %s", getal1, getal2);
}
else{
    console.log("%s komt niet voor %s", getal1, getal2);
}
