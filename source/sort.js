'use strict';

/**
 * This function sorts letters in words and changes their case:
 * the first letter becomes capital letter and other letters stays lowercase.
 * Then the function sorts the resulting words.
 * @param {string} someString - the input string for sorting.
 * @returns {string} - the sorted string.
 */

function sort(someString)
{
    someString = someString.trim();

    if (!someString)
        return someString;

    const collator = new Intl.Collator();

    const wordsOfString = someString.split(/\s+/);

    const sortWords = wordsOfString.map((word) => {
        word = word.toLowerCase().split('')
            .sort((a, b) => collator.compare(a, b)).join('');
        return word[0].toUpperCase() + word.slice(1);
    })

    return sortWords.sort((a, b) => collator.compare(a, b)).join(' ');
}