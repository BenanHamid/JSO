'use strict';

// dit script zou de getallen van 1 tem 10 op het scherm moeten tonen
var a=0;
while(a<10)
    ++a;
    console.log(a);

// dit script zou de getallen van 10 tem 15 op het scherm moeten tonen
for(var b=0; b<5; b++){
    console.log(10+b);
} 

a = 100;
// dit script zou een melding moeten tonen als a tussen 10 (incl) en 20 (incl) ligt
if (10 <= a <= 20){
    console.log("a heeft een geldige waarde");
}

// dit script zou een melding moeten tonen als a een getal of oneindig is 
// (of naar een getal geconverteerd kan worden) 
if(!isNaN(a)){
    console.log("a is een getal of oneindig");
}   

a = 1;
// de lus in dit script zou moeten stoppen zodra 
// a een veelvoud van 7 is of a strikt groter is dan 20
do{
    console.log(a, "wordt verwerkt");
    a += 1;
}while (a%7!=0  || a <= 20);

// dit script zou een lijn met 25 sterretjes op het scherm moeten tonen
function sterretjes(){
    var result = "";
    for(var i=0; i < 25; i++){
        result += "*";
    }
    return result;
}
console.log( sterretjes );