'use strict';

const roman_arabic = {
    "M":1000,
    "CM":900,
    "D":500,
    "CD":400,
    "C":100,
    "XC":90,
    "L":50,
    "XV":40,
    "X":10,
    "IX":9,
    "V":5,
    "IV":4,
    "I":1
};

function romanToArabic(roman) {
    let arabic = 0;
    let value = 0;
    let prev = 0;

    for (let i = 0; i < roman.length; i++) {
        let current = roman_arabic[roman.charAt(i)];
        if (current > prev) {
            arabic -= 2 * value;
        }
        if (current != prev) {
            value = 0;
        }
        value += current;
        arabic += current;
        prev = current;
    }

    return arabic;
}

function arabicToRoman(arabic) {
    let roman = "";

    if (arabic < 1) {
        throw new Error("Введено число меньше 1");
    }

    if (arabic > 3999) {
        throw new Error("Введено число больше 3999");
    }

    for(let key in roman_arabic){
        let quotient = Math.floor(arabic / roman_arabic[key]);
        if (quotient >= 0) {
            for (let i = 0; i < quotient; i++){
                roman += key;
            }
        }
        arabic %= roman_arabic[key];
    }

    return roman;
}

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function roman(input) {
    if (!input || input == null) {
        throw new Error("Введено неверное число");
    }

    if (isInt(input)) {
        return arabicToRoman(input)
    }

    input = input.toString().toUpperCase();

    if (/^[IVXLCDM]+$/.test(input)) {
        return romanToArabic(input)
    }

    throw new Error("Введено неверное число");
}
