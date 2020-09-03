'use strict';

function sort(someString)
{
    someString = someString.trim();

    if (!someString)
        return someString;

    const collator = new Intl.Collator();

    const wordsOfString = someString.split(/\s+/);

    let sortWords = wordsOfString.map((word) => {
        word = word.toLowerCase().split('')
            .sort((a, b) => collator.compare(a, b)).join('');
        return word[0].toUpperCase() + word.slice(1);
    })

    return sortWords.sort((a, b) => collator.compare(a, b)).join(' ');
}