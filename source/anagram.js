// Напишите функцию anagram, которая будет принимать на вход массив слов и
// группировать его на группы слов-анаграмм. Выводить только группы из двух и
// более слов. Слова в группах, как и сами группы, должны быть отсортированными.

'use strict';

const MIN_SIZE = 2;

const anagram = words => {
    let map = words.reduce(function (keys, word) {
        let key = word.replace(/[^A-Za-zА-Яа-яЁё]/g, "").toLowerCase().split('').sort().join('');

        if (!keys.hasOwnProperty(key)) {
            keys[key] = [];
        }
        keys[key].push(word);

        return keys;
    }, {});

    return [...Object.values(map)].filter(anagramPairs => anagramPairs.length >= MIN_SIZE)
        .sort(anagramPairs => anagramPairs.sort())
        .sort();
}