'use strict';

function anagram(data) {
    let map = new Map();

    for (let word of data) {
        let sorted = word.toLowerCase().split("").sort().join("");
        if (map.has(sorted)) {
            map.get(sorted).push(word);
        } else {
            map.set(sorted, new Array(word));
        }
    }

    let answer = Array.from(map.values()).filter( arr => arr.length > 1);
    answer.forEach( arr => arr.sort());
    return answer.sort();
}
