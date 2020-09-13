'use strict';

/**
 * Searches anagrams in array of words 
 * @param {string[]} words array of words to search anagrams in
 * @returns {string[][]} array of anagrams
 */
const anagram = (words) => {
    let mapByCharList = words.reduce((map, word) => {
        let charList = word.toLowerCase().split('').sort().join();
        if (charList in map) {
            map[charList].push(word);
        } else {
            map[charList] = [word];
        }
        return map;
    }, {});

    return Object.values(mapByCharList).filter(element => {
        return (element.length > 1) ? element.sort() : null;
    }).sort();
};
