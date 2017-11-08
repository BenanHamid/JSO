'use strict';

var aantal = new Array(6);

function initAantallen() {
    /*
    for (var i = 0; i < aantal.length; i++) {
        aantal[i] = 0;
    }
    */
    // korter:
    aantal.fill(0);
}

function werp() {
    return Math.floor(1 + Math.random() * 6);
}

function toon_resultaat() {
    console.log("ogen\tfrequentie");
    for (var i = 0; i < aantal.length; i++) {
        console.log("%d\t%d", i + 1, aantal[i]);
    }
}

function simuleerWorpen() {
    for (var teller = 1; teller <= 6000; teller++) {
        var aantal_ogen = werp();
        aantal[aantal_ogen - 1]++;
    }
}

initAantallen();
simuleerWorpen();
toon_resultaat();