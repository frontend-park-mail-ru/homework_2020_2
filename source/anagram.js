// Напишите функцию anagram, которая будет принимать на вход массив слов и
// группировать его на группы слов-анаграмм. Выводить только группы из двух и
// более слов. Слова в группах, как и сами группы, должны быть отсортированными.

'use strict';

const MIN_SIZE = 2;

// Группирует слова на слова-анаграммы
//
// @param {array} words - Массив слов для группировки анаграмм
// @return {array} Возвращает отсортированный массив из групп слов-анаграмм

const anagram = (words) => {
    if (words.constructor !== Array) {
        return null;
    }
    if (words.length === 0) {
        return [];
    }

    let map = words.reduce((keys, word) => {
        if (typeof word === 'string') {
            let key = word.replace(/[^A-Za-zА-Яа-яЁё]/g, '').toLowerCase().split('').sort().join('');

            if (!(key in keys)) {
                keys[key] = [];
            }
            if (!keys[key].includes(word)) {
                keys[key].push(word);
            }
        }

        return keys;
    }, {});

    return Object.values(map).filter((anagramPairs) => {
        return (anagramPairs.length >= MIN_SIZE) ? anagramPairs.sort() : null;
    }).sort();
}
