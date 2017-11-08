'use strict';

var ogen = new Array(6);
for (var i = 0; i < ogen.length; i++) {
    ogen[i] = 0;
}

for (var i = 0; i < 6000; i++) {
    ogen[Math.floor(Math.random() * ogen.length)]++
}

for (var i = 0; i < ogen.length; i++) {
     console.log(i+1 + '\t' + ogen[i])
}
