'use strict';

/**
 * Группирует слова анаграммы
 *
 * @param words - массив слов
 * @returns {string[][]}
 */
const anagram = words => {
    if (!words) {
        throw new Error('Argument is required');
    }

    if (!Array.isArray(words)) {
        throw new TypeError('Argument not array');
    }

    if (words.some(word => typeof word !== 'string')) {
        throw new TypeError('Array contains not only words');
    }

    const map = new Map();

    words.forEach((word) => {
        const sorted = word.trim()
            .toLowerCase()
            .split('')
            .sort()
            .join('');
        if (map.has(sorted)) {
            map.get(sorted).push(word);
        } else {
            map.set(sorted, [word]);
        }
    })

    const answer = Array.from(map.values()).filter(arr => arr.length > 1);
    answer.forEach(arr => arr.sort());
    return answer.sort();
}
