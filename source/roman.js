'use strict';

function deromanize(number)
{
    var values = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    var digits = Object.keys(values);

    if (!number)
        return null;
    number = number.toUpperCase();
    var res = 0;

    for (var q = 0; q < number.length; ++q) {
        if (digits.indexOf(number[q]) < digits.indexOf(number[q + 1])) {
            res -= values[number[q]];
        } else {
            res += values[number[q]];
        }
    }

    return res;
}

function romanize(number)
{
    var roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    var str = '';

    for (var i of Object.keys(roman)) {
        var q = Math.floor(number / roman[i]);
        number -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}

const roman = function (number)
{
    if (parseInt(number, 10))
    {
        return romanize(number);
    }
    else
    {
        return deromanize(number);
    }
}