'use strict';


function tekenLijn(number = 25, sign = '=') {
    var line = '';
    for (var i = 1; i <= number; i++) {
        line += sign;
    }
    console.log(line);
}

//tekenLijn(5, '*');

for (var i = 1; i <= 5; i++) {
    
  tekenLijn(i, '*');
}