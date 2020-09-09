'use strict';

/**
 * @description Formats array of integers to columns
 * @param {Array} array - The array of integers
 * @param {Number} columns - Number of columns
 * @returns {String}
 */

const format = (array, columns) => {
	if (!Array.isArray(array) || columns <= 0 || typeof(columns) !== 'number') {
		throw Error('Некорректный тип входных данных');
	}

	// Calculating max length of number in each column
	let colLength = new Array(columns).fill(0);
	array = array.filter(elem => typeof(elem) === 'number');

	for (let i = 0; i < array.length; i++) {
		const colNum = i % columns;

		colLength[colNum] = Math.max(colLength[colNum], String(array[i]).length);
	}

	// Creating formated array
	let table = '';

	for (let i = 0; i < array.length; i++) {
		const colNum = i % columns;

		if (colNum) {
			table += ' ';
		}
		table += String(array[i]).padStart(colLength[colNum],' ');
		if (i !== array.length - 1 && colNum === columns - 1) {
			table += '\n';
		}
	}

	return table;
}

