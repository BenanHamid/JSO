'use strict';

var toetsenbord = require('readline-sync');

var bedrag = toetsenbord.question("Hoeveel geld heb je op zak? ");
if (bedrag > 5) {
    console.log("Voor mij een ijsje met 3 bollen en slagroom aub");
}
else {
    console.log("Ik zal wel een platte water drinken");
}