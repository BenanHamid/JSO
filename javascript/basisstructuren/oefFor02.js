'use strict';
for (var tafel = 1; tafel <= 15; tafel++) { //tafel=+2 маниер за показване на нечестни числа
    if (tafel % 2 == 1) { // tafel is oneven //проверя колко е остатъка
        console.log("Dit is de tafel van %d:", tafel);
        for (var factor = 1; factor <= 10; factor++) {
            console.log("%d x %d = %d", factor, tafel, factor * tafel);
        }
    }
}