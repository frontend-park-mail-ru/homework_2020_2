'use strict';

/**
 * @description Formats array of integers to columns
 * @param {Array} array - The array of integers
 * @param {Number} columns - Number of columns
 * @returns {String}
 */


const format = (array, columns) => {
	if (!Array.isArray(array) || columns <= 0 || columns === undefined) {
    	throw Error('Некорректный тип входных данных');
	}

	// Calculating max length of number in each column
	let colLength = new Array(columns);
	colLength.fill(0, 0);

	const filteredArray = array.filter(elem=> typeof(elem) != 'undefined');

	for (let i = 0; i < columns; i++) {
		let column = [];

		for (let j = i; j < filteredArray.length; j += columns) {
				column.push(String(filteredArray[j]));
		}

		colLength[i] = column.reduce(function(maxLength, current) {
			const currentLength = current.length;

			return maxLength < currentLength ?
				maxLength = currentLength : maxLength;
		}, 0);
	}

	// Creating formated array
	const arraySize = filteredArray.length;
	let table = '';

	for (let i = 0; i < arraySize; i++) {
		const colNum = i % columns;

		if (colNum) {
			table += ' ';
		}
		table += String(filteredArray[i]).padStart(colLength[colNum],' ');
		if (i !== arraySize - 1 && colNum === columns - 1) {
			table += '\n';
		}
	}

	return table;
}

