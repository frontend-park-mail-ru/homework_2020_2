'use strict';

/**
 * Get value by key from JSON
 * @param {Object} object - JSON object to parse
 * @param {string} key - path to required value in object
 * @return {Object} object from JSON struct by path
 */
const get = (object, key) => {
	try {
		return key.split('.')
			.filter(element => element)
			.reduce((previousValue, currentValue) => {
				if (!previousValue) return undefined;
				return previousValue[currentValue];
			}, object);
	} catch (e) {
		throw new Error('Некорректный тип входных данных');
	}
};
