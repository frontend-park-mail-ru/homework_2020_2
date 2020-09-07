'use strict';

/**
 * Проверяет размер шахматной доски на корректность
 * @param {Number} size - размер шахматной доски
 * @returns {boolean} результат проверки
 */
const checkChessSize = (size) => {
    return (!Number.isInteger(+size) || size <= 1);
}

/**
 * Рисует ASCII-шахматрую доску размером size*size символов из звёздочек
 * @param {number} size - размер шахматной доски
 * @returns {string, null} сформированная шахматная доска
 */
const chess = (size) => {
    if (checkChessSize(size)) {
        return null;
    }
    const halfSize = Math.floor(size / 2);
    const isOdd = size % 2;
    const oddRow = '* '.repeat(halfSize) + ((isOdd) ? '*\n' : '\n');
    const evenRow = ' *'.repeat(halfSize) + ((isOdd) ? ' \n' : '\n');
    
    let res = (oddRow + evenRow).repeat(halfSize);
    if (isOdd) {
        res += oddRow;
    }
    return res;
}
