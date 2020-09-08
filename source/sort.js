'use strict';

/**
 * This function sorts letters in words and changes their case:
 * the first letter becomes capital letter and other letters stays lowercase.
 * Then the function sorts the resulting words.
 * @param {string} someString - the input string for sorting.
 * @returns {string} - the sorted string.
 */

const sort = (someString) => {
    if (typeof someString !== 'string') {
        throw new Error('Передан неверный тип данных');
    }

    const stringForSort = someString.trim();

    if (!stringForSort) {
        return stringForSort;
    }

    const collator = new Intl.Collator();

    const sortWords = stringForSort.split(/\s+/).map((word) => {
        word = word.toLowerCase().split('')
            .sort((a, b) => collator.compare(a, b)).join('');
        return word[0].toUpperCase() + word.slice(1);
    });

    return sortWords.sort((a, b) => collator.compare(a, b)).join(' ');
}