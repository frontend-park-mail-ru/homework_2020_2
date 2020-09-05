// Напишите функцию anagram, которая будет принимать на вход массив слов и
// группировать его на группы слов-анаграмм. Выводить только группы из двух и
// более слов. Слова в группах, как и сами группы, должны быть отсортированными.

'use strict';

const MIN_SIZE = 2;

const anagram = words => {
    let map = new Map([]);

    for (let word of words) {
        let key = word.replace(/[^A-Za-zА-Яа-яЁё]/g, "").toLowerCase().split('').sort().join('');

        if (map.has(key)) {
            map.get(key).push(word);
        } else {
            map.set(key, [word]);
        }
    }

    return [...map.values()].filter(anagramPairs => anagramPairs.length >= MIN_SIZE)
        .sort(anagramPairs => anagramPairs.sort())
        .sort();
}

