'use strict';

var aantal = 99;
var recipient = 'bottles';
var recipient2 = 'bottle';
var inhoud = 'beer';

for(aantal; aantal > 1; aantal--){
    
    if(aantal > 1){
        console.log(aantal + ' %s of beer on the wall, ' + aantal + ' %s of beer.\nTake one down and pass it around, ' + aantal + ' %s of beer on the wall.\n', recipient, recipient, recipient);
    else {
        console.log(aantal + ' %s of beer on the wall, ' + aantal + ' %s of beer.\nTake one down and pass it around, ' + aantal + ' %s of beer on the wall.\n', recipient2, recipient2, recipient2);
    }
}