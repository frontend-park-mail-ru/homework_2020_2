'use strict';

const chess = function(n) {
	if (n <= 1) {
		return null;
	}

	let field = "";
	let evenLine = "";
	let oddLine = "";

	for (let i = 0; i < n; i++) {
		evenLine += i % 2 ? " " : "*";
		oddLine += i % 2 ? "*" : " ";
	}

	for (let i = 0; i < n; i++) {
		field += i % 2 ? oddLine + "\n" : evenLine + "\n";
	}	

	return field;
};
