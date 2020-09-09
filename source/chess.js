'use strict';


/**
 * Returns the chess board size by size in string
 * @param {number} size, if size is not a number or size <= 1, functioon returns null
 * @returns {(string|null)} String which contains the chess board or null
 */
const chess = (size) => {
    if (isNaN(+size) || size <= 1 || !Number.isInteger(+size)) {
        return null;
    }

    return (makeChessLine(size, true) + makeChessLine(size, false)).repeat(size / 2) +
        (size % 2 ? makeChessLine(size, true) : '');
};


/**
 * Returns the chess board line, odd or even
 * @param {number} length, line length
 * @param {boolean} isEven, if isEven is true, even line is returned, otherwise, odd line is returned 
 * @returns {string} String which contains the chess board line
 */
const makeChessLine = (length, isEven) => isEven ?
    '* '.repeat(length / 2) + (length % 2 ? '*\n' : '\n') :
    ' *'.repeat(length / 2) + (length % 2 ? ' \n' : '\n');