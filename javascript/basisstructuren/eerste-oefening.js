'use strict';

var l, v;

var toetsenbord = require('readline-sync');

var eersteGetal = toetsenbord.question('Tik je eerste getal in: ');
var tweedeGetal = toetsenbord.question('Tik je tweede getal in: ');

var product = eersteGetal * tweedeGetal;

console.log('Het product van %s en %s is', eersteGetal, tweedeGetal, product );

var loon = toetsenbord.question('Tik je loon in: ');
var loonsverhoging = toetsenbord.question('Tik je loonsverhoging in: ');

l = +loon; //of l = parseInt(loon);
v = +loonsverhoging;

var nieuweLoon = (l + v);

console.log('Je nieuwe loons is %s', nieuweLoon, '=', loon, '+', loonsverhoging );