'use strict';


/**
 * Returns the chess board n by n in string
 * @param {number} n, if n is not a number or n <= 1, functioon returns null
 * @returns {(string|null)} String which contains the chess board or null
 */

const chess = function(n) {
	if (isNaN(+n) || n <= 1) {
		return null;
	}

	let evenLine = "* ".repeat(n / 2) + (n % 2 ? "*\n" : "\n");
	let oddLine = " *".repeat(n / 2) + (n % 2 ? " \n" : "\n");

	return (evenLine + oddLine).repeat(n / 2)  + (n % 2 ? evenLine : "");
};
