'use strict';

/**
 * Solves math expression with one argument
 * Expression argument must be named 'x'
 * Allowed operations: addition, subtraction, multiplication
 * Only integer numbers are allowed
 * @param {string} expression Math expression
 * @param {number} arg Argument value
 * @return {number} Expression result
 * @throws {TypeError} Invalid argument type
 * @throws {SyntaxError} Invalid expression syntax
 */
const solve = (expression, arg) => {
	if (!/^[-+*x0-9() ]+$/.test(expression) || 
			/(\*|\+|-){2,}/.test(expression) ||
			/x *x/.test(expression) ||
			/[x0-9] *[x0-9]/.test(expression)) {
		throw new SyntaxError('Invalid expression syntax');
    }
	if (typeof expression !== 'string' || typeof arg !== 'number' || 
			!Number.isInteger(arg)) {
		throw new TypeError('Invalid parameters');
    }
    if (expression.split('(').length !== expression.split(')').length) {
		throw new SyntaxError('Invalid braces placement');
    }
	let res = new Function('x', `return ${expression}`)(arg)
	if (typeof res !== 'number' || !Number.isInteger(res)) {
		throw new SyntaxError('Invalid expression');
	}
	return res;
}
