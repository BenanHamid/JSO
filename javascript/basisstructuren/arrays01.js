'use strict';

// declaratie van een array (tabel)
var lijst;

// creatie van een array
lijst = new Array();   // Array constructor
var aantalElementen = lijst.length;
console.log("Na creatie bevat lijst %d elementen", aantalElementen);

// 5 elementen toevoegen aan lijst
for (var i = 0; i < 5; i++) {
    lijst[i] = (i + 1) * 10;
}
console.log("Na toevoeging van 5 elementen bevat lijst %d elementen", lijst.length);
console.log(lijst);

// eerste element overschrijven
lijst[0] = 0;
console.log(lijst);

// laatste element overschrijven
lijst[lijst.length - 1] = "een vreemde eend in de bijt";
console.log(lijst);

// alle elementen een voor een overlopen
// (en tonen op het scherm)
for (var i = 0; i < lijst.length; i++) {
    console.log(lijst[i]);
}

console.log("elementen in omgekeerde volgorde:");
for (var i = lijst.length - 1; i >= 0; i--) {
    console.log(lijst[i]);
}

// lijst groter maken door element toe te voegen op positie die nog niet bestaat
lijst[lijst.length + 3] = "kiekeboe";
console.log(lijst);
for (var i = 0; i < lijst.length; i++) {
    console.log(lijst[i]);
}

// element achteraan toevoegen
lijst.push("koekoek");
console.log(lijst);
// andere manier om element achteraan toe te voegen:
lijst[lijst.length] = "nog eens koekoek";
console.log(lijst);

// array maken met array literal (performanter dan array constructor)
var k3 = [];  // array literal
k3.push("Karen");
k3.push("Kristel");
k3.push("Kathleen");
console.log(k3);
