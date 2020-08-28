'use strict';

/**
 * Делает симметричные отступы у переданной строки.
 * @param {string} str - строка, у которой необходимо сделать отступы
 * @param {number} padding - на сколько пробелов нужно отступить слева и справа
 * @returns {string} полученная строка
 */
const pad = (str, padding) => str.padStart(str.length + padding).padEnd(str.length + padding * 2);

/**
 * Функция строит дерево, представленное в строковом виде.
 * @param {number, string} height - количество ярусов елки
 * @returns {string, null} сформированная елка, либо null в случае ошибки
 */
const tree = (height) => {
    height = +height;

    if (isNaN(height) || height < 3) {
        return null;
    }

    let tree = '';

    for (let i = 1; i < height; i++) {
        tree += pad('*'.repeat(i * 2 - 1), height - i - 1) + '\n';
    }

    tree += pad('|', height - 2) + '\n';

    return tree;
}
