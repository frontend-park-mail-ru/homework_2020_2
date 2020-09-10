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

		table += String(array[i]).padStart(colNum ? colLength[colNum] + 1 : colLength[colNum],' ');
		table += (i !== array.length - 1 && colNum === columns - 1) ? '\n' : '';
	}

	return table;
}

