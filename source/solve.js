'use strict';

const MATH_MARKING_REGEXP = /^\s*-?[(0-9x]+[(0-9x*+-\/)\s]*$/;
const INVALID_MATH_EXPRESSION = 'invalid math expression';
const WRONG_FUNCTION_PARAMS = 'incorrect function input';


/**
 * Calculates math expression with signs +-* and one unknown variable x
 * @param {String} expression - Math expression
 * @param {Number} variable - Unknown Math variable
 * @returns {Number} - Calculated math expression value
 * @throws {TypeError} - types of function inputs are wrong
 * @throws {SyntaxError} - Math expression contains unsupported signs or incorrect
 */
const solve = (expression, variable) => {
    if(typeof(expression) !== 'string' ||  typeof(variable) !== 'number'){
        throw new TypeError(WRONG_FUNCTION_PARAMS);
    }

    if(!expression.match(MATH_MARKING_REGEXP)){
        throw new SyntaxError(INVALID_MATH_EXPRESSION);
    }

    return new Function('x',`return ${expression}`)(variable);
}
