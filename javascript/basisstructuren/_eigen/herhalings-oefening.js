'use strict';
var toetsenbord = require('readline-sync');

// 1
const pi = Math.PI;
//var r = toetsenbord.question('Tik de straal in: ')

function oppCirkel(r) {
    var opp;
    opp = pi * (r * r);
    console.log('De oppervlakte van een circle met straal ' + r + ' is ' + opp);
    return opp;
}

oppCirkel(4);

function omtrekCirkel(r) {
    var omtrek;
    omtrek = 2 * pi * r
    console.log('De omtrek van een circle met straal ' + r + ' is ' + omtrek);
    return omtrek;
}

omtrekCirkel(4);

//2

function pythagoras(a, b) {
    var c;
    c = Math.sqrt((a * a) + (b * b));
    console.log('De schuine zijde "c" is :' + c);
    return c;
}

//var a = toetsenbord.question('Tik de zijde "a" in: ')
//var b = toetsenbord.question('Tik de zijde "b" in: ')

pythagoras(3, 4);

// 3

function discriminant(a, b, c) {
    var result;
    result = Math.pow(b, 2) - 4 * a * c;
    console.log('Discriminant: ' + result);
    return result;
}

discriminant(1, 2, 3);
discriminant(2, 4, 2);
discriminant(5, 1, 0);

function nulpunten(a) {
    if (a <= -0) {
        console.log('0 als de discriminant van de vergelijking strikt negatief is');
    } else if (a == 0) {
        console.log('1 als de discriminant van de vergelijking gelijk is aan 0');
    } else if (a => 0) {
        console.log('2 als de discriminant strikt positief is');
    }
}

nulpunten(discriminant(1, 2, 3));
nulpunten(discriminant(2, 4, 2));
nulpunten(discriminant(5, 1, 0));

//4
/*
function schrikkeljaar(jaar) {
    var result;
    if (jaar % 4 == 0) {
        result = true
    }
    else if (jaar % 100 != 0) {
        result = false
    }
    else if (jaar % 400 == 0) {
        result = true
    }
    else {
        result = false
    }
    return result;
}
*/

function schrikkeljaar(jaar) {
    return ((jaar % 4 == 0) && (jaar % 100 != 0)) || (jaar % 400 == 0);
}
console.log(schrikkeljaar(2017));

//5

/*
Tik je huidige bonus-malus in: 

---

Tik de aantal ongevallen in: 
Je niuewe bonus-malus is: 

---

Je bonus-malus trap is nu 18! Je moet een andere verzekeringsmaatschappij zoeken!
*/

function bonusMalusTrap(huidige, ongevallen) {
    var newHuidig = 0;
    do {
        var huidige = parseInt(toetsenbord.question('Tik je huidige bonus-malus in: '), 10)
    } while (isNaN(huidige) || huidige > 18 || huidige < 1)

    do {
        var ongevallen = parseInt(toetsenbord.question('Tik je aantal ongevallen in: '), 10)
    } while (isNaN(ongevallen))


    if (ongevallen == 1) {
        newHuidig = huidige + 2
    } else if (ongevallen > 1) {
        newHuidig = huidige + (3*ongevallen)
    } else if (ongevallen < 0) {
        newHuidig = huidige - ongevallen;
    }

    if (newHuidig > 18) {
        console.log('Je bonus-malus trap is nu/over 18! Je moet een andere verzekeringsmaatschappij zoeken!');
    } else if(newHuidig < 18){
        console.log('Je niuewe bonus-malus is: ' + newHuidig);
    }

}

bonusMalusTrap();