'use strict';

var toetsenbord = require('readline-sync');

function checkArmstrongNumber(number) {
    var copyOfNumber = number;
    var noOfDigits = number.length;
    var sum = 0;

    while (copyOfNumber != 0) {
        var lastDigit = copyOfNumber % 10;
        var lastDigitToThePowerOfNoOfDigits = 1;
        for (var i = 0; i < noOfDigits; i++) {
            lastDigitToThePowerOfNoOfDigits = lastDigitToThePowerOfNoOfDigits * lastDigit;
        }
        sum += lastDigitToThePowerOfNoOfDigits;
        copyOfNumber = Math.floor(copyOfNumber / 10);
    }
    return sum == number;
}

var number = toetsenbord.question("enter a number: ")
console.log("%s is %s armstrong number",number, checkArmstrongNumber(number) ? "an": "not a");