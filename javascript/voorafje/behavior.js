'use strict';

var kleuren = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var indexKleur = 0;
var x1, y1, x2, y2;
var tekenen = false;

setTimeout(wakkerWorden, 6000);
setInterval(veranderAchtergrondKleur, 2000);

function wakkerWorden() {
    alert("Hoe lang ga jij nog naar deze pagina blijven staren?");
}

function veranderAchtergrondKleur() {
    document.getElementById("body").setAttribute("bgcolor", kleuren[(indexKleur++) % kleuren.length]);
}

function tekenCirkel() {
    var straal = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 2;
    var x_middelpunt = (x1 + x2) / 2;
    var y_middelpunt = (y1 + y2) / 2;

    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x_middelpunt, y_middelpunt, straal, 0, 360);
    ctx.stroke();
}

function teken(e) {
    if (tekenen) {
        var canvas = document.getElementById("canvas");
        var rect = canvas.getBoundingClientRect();
        x2 = e.clientX - rect.left;
        y2 = e.clientY - rect.top;
        tekenCirkel();
    }
}

window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.onmousemove = teken;
    canvas.onmousedown = function (e) {
        tekenen = true;
        var rect = canvas.getBoundingClientRect();
        x1 = e.clientX - rect.left;
        y1 = e.clientY - rect.top;
    }
    canvas.onmouseup = function (e) {
        tekenen = false;
    }
}