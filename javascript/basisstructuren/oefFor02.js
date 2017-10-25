'use strict';
for (var tafel = 1; tafel <= 5; tafel++) {
    if (tafel % 2 == 1) { // tafel is oneven
        console.log("Dit is de tafel van %d:", tafel);
        for (var factor = 1; factor <= 10; factor++) {
            console.log("%d x %d = %d", factor, tafel, factor * tafel);
        }
    }
}