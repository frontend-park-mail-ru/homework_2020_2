'use strict';

function sort(someString)
{
    const collator = new Intl.Collator();

    if (!someString)
        return someString;

    let wordsOfString = someString.split(' ').filter(Boolean);

    for (let i in wordsOfString) {
        if (wordsOfString.hasOwnProperty(i)) {
            wordsOfString[i] = wordsOfString[i].toLowerCase().split('')
                .sort(function (a, b) {
                    return collator.compare(a, b)
                }).join('');
            wordsOfString[i] = wordsOfString[i][0].toUpperCase() + wordsOfString[i].slice(1);
        }
    }

    return wordsOfString.sort(function (a, b) {return collator.compare(a, b)}).join(' ');
}