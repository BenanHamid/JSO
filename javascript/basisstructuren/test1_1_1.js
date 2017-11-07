'use strict';

const TIEN = 10;
var a = TIEN, b, c;

console.log(b);
if (a++ == TIEN) { // първо сравнява числото и после качва с единица
    console.log("a is tien");
}
else {
    console.log("a verschilt van 10");
}
console.log(a); //показва новата стойност на "а"
a=11;
console.log(a + 1 + "2"); //след "а" няма стринг, затова се събират и получаваме 12 и след това се конкатинира и се получава 122
console.log("2" * a); // получава се 22
if (isNaN(a / 0)) {
    console.log("in if van isNaN");
}
else {
    console.log("in else van isNaN"); // е отговорът защото е резултата "инфинити"
}

c = 1;
var result = "";
switch (c) {
    case 1: result += "Komt dit op het scherm? ";
    case 2: result += "Wat denk je? ";
    default: result += "We zullen zien... ";
}
console.log(result); // ще ги покаже всичките, защото след тях няма break; ...

b = 2;
c += 5 + b * 3;
console.log(c); // 12

var naam = "Jan";
if (naam == "jan") {
    console.log("het is jan");
}
else {
    console.log("het is jan niet"); // JS е чуствителен към височината на буквите, дори и в стринговете
}

if ("10" === TIEN) {
    console.log("Je hebt waarschijnlijk geen tien");
}
else {
    console.log("Je hebt misschien tien"); // защото не са от един и същи тип 
}

var jaar = 2000;
var tmp = jaar%400 == 0 ? "schrikkeljaar" : "geen schrikkeljaar";
var bericht = jaar%4 == 0 ? (jaar%100 == 0 ? tmp :"schrikkeljaar") : "geen schrikkeljaar";
console.log(bericht); // schrikkeljaar

var zijde = 2; // глобална променлива
function oppVierkant(zijde){
    var tmp = zijde;  // тмп е 2 //след като завърши функцията се забравят всички локални стойности
    zijde++;    // става 3 
    return tmp*tmp; // 2 * 2 //4
}
var opp = oppVierkant(zijde);
console.log("zijde: %d, opp: %d", zijde, opp);

var z = 3;
function omtrekVierkant(s){
    var z = 4*s;
    return z;
} 
var circ = omtrekVierkant(z);
console.log("z: %d, circ: %d", z, circ); //12


var getal1 = "10"; //стринговете се сравняват по азбучен ред, тоест в случая 1 и 2 
var getal2 = "2";
if (getal1 < getal2){
    console.log("%s komt voor %s", getal1, getal2);
}
else{
    console.log("%s komt niet voor %s", getal1, getal2);
}
