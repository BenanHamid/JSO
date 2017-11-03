'use strict';

function tekenLijn(lengte=25, karakter="="){
    var lijn = "";
    for(var i=1; i <= lengte; i++){
        lijn += karakter;
    }
    console.log(lijn);
}

tekenLijn();
tekenLijn(10);
tekenLijn(20, "*");

for(var i=1;i<=10; i++){
    tekenLijn(i,"*");
}