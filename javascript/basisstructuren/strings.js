'use strict';

// een (string)literal staat tussen enkele of dubbele quotes
var s = "pandemonium";
// literals zijn primitieve waarden (geen String-objecten)

// strings zijn 'immutable'
s.toUpperCase();
console.log(s);  // pandemonium
s = s.toUpperCase();
console.log(s);  // PANDEMONIUM

console.log("Het woord %s bestaat uit %d karakters.", s, s.length);

// literals verspreiden over meerdere lijnen
// manier 1: concateneren met +operator
var langeString = "dit is een lange " +
                    "zin of zo lijkt " +
                    "het toch";
console.log(langeString);
// manier 2: backslach op einde van de lijn
// geeft aan dat stringliteral verder gaat op
// volgende lijn
langeString = "Jan, Piet, Joris \
en Korneel, die hebben \
baarden";
console.log(langeString);

// escape characters
s = "zin1\nzin2";
console.log(s);
s = "c:\temp";
console.log(s);  // c:  emp
s = "c:\\temp";
console.log(s);  // c:\temp
s = "Zij zei:\"hallo!\"";
console.log(s);  //  Zij zei:"hallo!"
s = 'Zij zei:"hallo!"';
console.log(s);  //  Zij zei:"hallo!"

// strings kunnen met de new operator ook gemaakt worden als String-objecten
// (dit zijn geen primitieve waarden!!!)
var stringObject = new String(s);
console.log(stringObject);

// *************************
// strings vergelijken
// *************************
if(s == stringObject){  //  == vergelijkt de inhoud van strings
    console.log("s == stringObject");
}

if (s === stringObject){ // s is een primitieve waarde, stringObject is een string object
    // => verschillend type
    console.log("s === stringObject")
}

var w1 = "Appel", w2  = "appel";
if (w1 < w2){
    console.log("%s komt alfabetisch voor %s", w1, w2);
}
else{
    console.log("%s komt alfabetisch voor %s", w2, w1);
}

// of met een fie:
var result = w1.localeCompare(w2);
if (result < 0){
    console.log("%s komt alfabetisch voor %s", w1, w2);
}
else if (result == 0){
    console.log("%s en %s hebben dezelfde inhoud", w1, w2);
}
else{  // result > 0
    console.log("%s komt alfabetisch voor %s", w2, w1);
}
