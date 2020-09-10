'use strict';

/**
 * Searches anagrams in array of words 
 * @param {string[]} words array of words to search anagrams in
 * @returns {string[][]} array of anagrams
 */
const anagram = (words) => {
    let mapByCharList = {};

    words.forEach(word => {
        let charList = word.split('').sort().join();
        if (charList in mapByCharList) {
            mapByCharList[charList].push(word);
        } else {
            let a = [word]
            mapByCharList[charList] = a;
        }
    });

    let output = Object.values(mapByCharList).filter(element => {
        return (element.length > 1) ?
            element.sort() : null;
    });

    return output.sort();
};
