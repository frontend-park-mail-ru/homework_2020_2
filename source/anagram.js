'use strict';

/**
 * Searches anagrams in array of words 
 * @param {string[]} words array of words to search anagrams in
 * @returns {string[][]} array of anagrams
 */
const anagram = (words) => {
    if (!Array.isArray(words)) {
        throw new TypeError(`Expected 'Array', received ${typeof words}`);
    }

    const isNotString = (word) => typeof word !== 'string';
    if (words.some(isNotString)) {
        throw new TypeError(`Expected Array elements type of 'string', received element of another type`);
    }

    const mapByCharList = words.reduce((map, word) => {
        const charList = word.toLowerCase().split('').sort().join('');
        (map[charList]) ? (map[charList].push(word)) : (map[charList] = [word]);
        return map;
    }, {});

    return Object.values(mapByCharList).filter(element => {
        return (element.length > 1) ? element.sort() : null;
    }).sort();
};
