'use strict';

// een (string) literal staat tussen enekele off dubbele quotes
var s = 'pandemonium';

// literals zijn primitieve waarden (geen String-objecten)

// Strings zijn 'immutable'
s.toLocaleUpperCase(); //String-a не се променя, а се създава нов String с нова стойност
console.log(s); // pandemonium
s = s.toUpperCase(); // Прилага се нова стойност на var s
console.log(s); // PANDEMONIUM

console.log('Het woord %s bestaat uit %d karakters.', s, s.length) // .length не е функция, затова няма нужда да се добавят скоби след него.

// literqls verspreiden over meerdere lijnen
// manier 1: concateneren met +operator 
var langeString = 'Dit is een lange' +  // Кавичките трябва да се затварят в същият ред
    'zin of zo lijkt' +
    'het toch';

console.log(langeString);

// manier 2: backslach op einde van de lijn
// geeft aan dat stringliteral verder gaat op
// volgende lijn

// Може да продължим String-a в следащият ред, след като се използва наклонена черта назад
// в края на ред-а означава, че стринга продължава в следващият ред

langeString = 'Jan, Piet, Joris \
en Korneel, die hebben \
baarden';

console.log(langeString);

// escape characters 
    // \n визуализира стринга на нов ред
    s = 'zin1\nzin2';
    console.log(s); // zin1
                    // zin2
    // табулация
    s = 'c:\temp';
    console.log(s); //c:    emp

    // за визуализацията на \\
    s = 'c:\\temp';
    console.log(s); //c:\temp

    // за визуализацията на ''
    s = 'Zij zei \'Hallo\''; // Zij zei 'Hallo'
    console.log(s)

    s = 'Zij zei "Hallo"'; // Zij zei "Hallo"
    console.log(s)

// String Objects
// Strings kunnen met de new operator ook gemaakt worden als String-objecten
// (dit zijn geen primitieve waarden!!!)

var stringObject = new String(s);
console.log(stringObject); // [String: 'Zij zei "Hallo"']

// ************************
// strings vergelijken
// ************************

// vergelijkt de inhoud van strings 
if(s == stringObject) { // == оператора проверява съдържанието на промениливата, а не по-какъв начин е създаден
    console.log('s == s2');
}  

if(s === stringObject) { // s - literal (primitieve waarde) ~ stringObject - object (string object)
    console.log('s === s2'); // => verschillend type
}  

var w1 = 'Appel', w2 = 'appel'; // ** ASCII tabel 
if(w1 < w2){
    console.log('%s komt alfabetisch voor %s', w1, w2);
} else {
    console.log('%s komt alfabetisch voor %s', w2, w1);
}

//of met met een functie:
var result = w1.localeCompare(w2);  //.localeCompare(); връща число // .locale го изчислява в локалната машината, което означава може да се получи различен резултат при различините операционни системи и региони
if (result < 0){
    console.log('%s komt alfabetisch voor %s', w1, w2);
} else if (result == 0) {
    console.log('%s en %s hebben dezelfde inhoud', w1, w2);
} else {// result > 0
    console.log('%s komt alfabetisch voor %s', w2, w1);
}