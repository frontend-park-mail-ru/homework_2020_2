'use strict';

/**
 * Get value by key from JSON
 * @param {Object} object - JSON object to parse
 * @param {string} key - path to required value in object
 * @return {Object} object from JSON struct by path
 */
const get = (object, key) => {
	try {
		key.split('.').reduce((previousValue, currentValue) => {
			if (!currentValue || !object) {
				return;
			} else if (object[currentValue] === undefined) {
				object = undefined;
				return;
			}

			object = object[currentValue];
		});

		return object;
	} catch (e) {
		if (e instanceof TypeError) {
			throw new Error('Некорректный тип входных данных');
		} else {
			throw e;
		}
	}
};
