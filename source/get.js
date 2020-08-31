'use strict';

const get = function (object, key) {
	let path = key.split(".").filter(function (element) { return element; });
	for (let i = 0; i < Array.from(path).length; ++i) {
		let element = path[i];
		if (object[element] === undefined) {
			object = undefined;
			break;
		}
		object = object[element];
	}
	return object
}
