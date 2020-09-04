'use strict';

const format = function (array, columns) {
	if (columns <= 0) {
		return undefined;
	}

	// Calculating max length of number in each column
	let colLength = [];

	for (let i = 0; i < columns; i++) {
		let column = [];

		for (let j = i; j < array.length; j += columns) {
			if (typeof(array[j]) === 'undefined') {
				column.push('');
			} else {
				column.push(String(array[j]));
			}
		}

		colLength[i] = column.reduce(function(maxLength, current) {
			const currentLength = current.length;

			return maxLength < currentLength ?
				maxLength = currentLength : maxLength;
		}, 0);
	}

	// Creating formated array
	const arraySize = array.length;
	let table = '';
	let elem = '';

	for (let i = 0; i < arraySize; i++) {
		const colNum = i % columns;
		if (typeof(array[i]) == 'undefined') {
				elem = '';
			} else {
				elem = String(array[i]);
			}

		let spacesNum = colLength[colNum] - elem.length;

		table += ' '.repeat(spacesNum);
		if (colNum) {
			table += ' ';
		}
		table += elem;
		if (i !== arraySize - 1 && colNum === columns - 1) {
			table += '\n';
		}
	}

	return table;
}