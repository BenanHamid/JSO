'use strict';

var toetsenbord = require('readline-sync');
//1

do {
    // var email = toetsenbord.question('Tik je e-mail in: ')
    var email = 'me@belkinfahri.com'
} while (email.indexOf('@') == -1);

console.log('Uw e-mail adres is ' + email + '\n');

//2
do {
    //var woord = toetsenbord.question('Tik een woord in dat minstens 14 karakters lang moet zijn: ')
    var woord = 'ACCOUNTMANAGER'
} while (woord.length < 14);

console.log(woord + '\n');

//3

//var zin = toetsenbord.question('Tik een zin in: ')
    
var zin = 'Jan,die hier woont,is weg';
var newZin = zin.replace(/,/g , ", ")
console.log(newZin + '\n');
//може и с for loop с if

//4

var zin = 'Jan, die hier woont,is weg';
var newNewZin = zin.replace(/,(?=[^\s])/g, ", ");
console.log(newNewZin);

//5

function reverseString(str) {
    //return str.split("").reverse().join("");
    var split = str.split('');
    var reverse = split.reverse();
    var join = reverse.join('');
    return join;
}

do {
    //var palindroom = toetsenbord.question('Tik een woord in dat palindroom is: ')
    var palindroom = 'lepel';
    if(palindroom == reverseString(palindroom)){
        console.log('Het woord is een palindroom!\n');
    } else {
        console.log('Het woord is geen palindroom!\n');
    }
} while (palindroom !== reverseString(palindroom));


//6
//var tekst = toetsenbord.question('Tik een tekst in: ');
var tekst = 'heel goed';
console.log(tekst)
var eindTekst = tekst.replace(/h/gi, "*").replace(/g/gi, "h").replace(/\*/gi, "g"); //за да се комбинират два regexp в един просто се изписват един след друг без разстояние или символ
console.log(eindTekst + '\n');

//7
var zintekst = 'heel goed';

function naarAntwerps(vertalen){
    var antVert = vertalen.replace(/h/g , "");
    console.log('Je tekst in het Antwerps: ' + antVert);
}
naarAntwerps(zintekst);

function naarLimburgs(vertalen){
    var limVert = vertalen.replace(/a/g , "aa").replace(/e/g , "ee").replace(/o/g , "oo").replace(/u/g , "uu").replace(/i/g , "ii");
    console.log('Je tekst in het Limburgs: ' + limVert +'\n');
}
naarLimburgs(zintekst);

//8
function aantalWoorden(str){
  var string = str.split(' ').length;
  console.log(string)
}
aantalWoorden('Ik drink bier\n');

//9
function belgischeNaam(naam){
    var string1 = naam.split(' ');
    var voornaam = naam.split(' ', 1)
    var familienaam = "";
    for(var i = 1; i < string1.length; i++){
        familienaam += string1[i] + ' ';
    }
    console.log(familienaam + ', ' + voornaam);
}

belgischeNaam('Jos Van der Meulen')

function nederlandseNaam(naam){
    var string = naam.split(' ');
    if(string.length > 2){
        var familienaam = string.pop();
        var voornaam = naam.split(' ', 1)
        var add = "";
        for(var i = 1; i < string.length - 1; i++){
            add += string[i] + ' ';
        }
        add += string[i];
        console.log(familienaam + ', ' + add + ', ' + voornaam);
    } else {
        var voornaam = naam.split(' ', 1);
        var familienaam = "";
        for(var i = 1; i < string.length; i++){
            familienaam += string[i];
        }
        console.log(familienaam + ', ' + voornaam);
    }
}

nederlandseNaam('Thomas Van der Plaetsen');
nederlandseNaam('Eva De Clercq');
nederlandseNaam('Janssen Jan');
nederlandseNaam('Simon Janssens de Varebeke van huppeldepup');
console.log();

//10

var rijksRegisterNummer = '910817-289.32';
var splitRijks = rijksRegisterNummer.split('.').pop().toString();

function geslacht(nummer){
    if (nummer % 2 == 0){
        console.log('Vrouw');
    } else {
    console.log('Man');
}
}

geslacht(splitRijks);