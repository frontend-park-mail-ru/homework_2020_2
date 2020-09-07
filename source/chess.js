'use strict';


/**
 * Returns the chess board n by n in string
 * @param {number} n, if n is not a number or n <= 1, functioon returns null
 * @returns {(string|null)} String which contains the chess board or null
 */
const chess = (n) => {
	if (isNaN(+n) || n <= 1 || !Number.isInteger(+n)) {
		return null;
	}

	return (makeChessLine(n, true) + makeChessLine(n, false)).repeat(n / 2) +
		 (n % 2 ? makeChessLine(n, true) : '');
};



/**
 * Returns the chess board line, odd or even
 * @param {number} n, line length
 * @param {boolean} isEven, if isEven is true, even line is returned, otherwise, odd line is returned 
 * @returns {string} String which contains the chess board line
 */
 const makeChessLine = (n, isEven) => isEven ? 
 	'* '.repeat(n / 2) + (n % 2 ? '*\n' : '\n') :
 	' *'.repeat(n / 2) + (n % 2 ? ' \n' : '\n');