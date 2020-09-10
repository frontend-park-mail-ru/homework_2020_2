'use strict';

const MATH_MARKING_REGEXP = /^\s*-?[(0-9x]+[(0-9x*+-\/)\s]*$/;
const INVALID_MATH_EXPRESSION = 'invalid math expression';
const WRONG_FUNCTION_PARAMS = 'incorrect function input';
const MATH_NUMBERS_REGEXP = /[0-9]+/;


/**
 * Calculates math expression with signs +-* and one unknown variable x
 * @param {String} expression - Math expression
 * @param {Number} variable - Unknown Math variable
 * @returns {Number} - Calculated math expression value
 * @throws {TypeError} - types of function inputs are wrong
 * @throws {SyntaxError} - Math expression contains unsupported signs or incorrect
 */
const solve = (expression, variable) => {
    if (typeof (expression) !== 'string' || typeof (variable) !== 'number') {
        throw new TypeError(WRONG_FUNCTION_PARAMS);
    }

    if (!expression.match(MATH_MARKING_REGEXP)) {
        throw new SyntaxError(INVALID_MATH_EXPRESSION);
    }

    expression = expression.replaceAll('x', variable).replaceAll(' ', '');
    const postfixExression = infixToPostfix(expression);

    if (postfixExression === null) {
        throw new SyntaxError(INVALID_MATH_EXPRESSION);
    }

    const resultValue = calculatePostfixExpression(postfixExression);

    if (resultValue === null) {
        throw new SyntaxError(INVALID_MATH_EXPRESSION);
    }

    return resultValue;
}


/**
 * Translates infix form of math expression to postfix
 * @param {String} expression - infix Math expression
 * @returns {String|null} postfixExpression - evaluated postfix Math expression
 */
const infixToPostfix = (expression) => {
    if (typeof expression !== 'string') {
        return null;
    }

    let postfixExpression = [];
    let operandsStack = [];

    const operatorTypePrecedence = (operator) => ({
        '*': 2,
        '+': 1,
        '-': 1
    }[operator] || 0);

    for (let i = 0; i < expression.length; i++) {
        const symbol = expression[i];

        if (operatorTypePrecedence(symbol) > 0) {
            while (operandsStack.length && operatorTypePrecedence(operandsStack[operandsStack.length - 1]) > 0) {
                postfixExpression.push(operandsStack.pop());
            }

            operandsStack.push(symbol);
        }
        switch (symbol) {
            case '(':
                operandsStack.push(symbol);
                break;
            case ')':
                let operand = operandsStack.pop();

                while (operand !== '(') {
                    postfixExpression.push(operand);
                    operand = operandsStack.pop();
                }
                break;
            default:
                if (symbol.match(MATH_NUMBERS_REGEXP)) {
                    postfixExpression.push(symbol);
                }
        }
    }

    while (operandsStack.length) {
        postfixExpression.push(operandsStack.pop());
    }

    return (postfixExpression.length > 0 ? postfixExpression : null);
}


/**
 * calculates postfix Math expression
 * @param {Object} expression - list of operands
 * @returns {null|number} - evaluated postfix Math expression
 */
const calculatePostfixExpression = (expression) => {
    const operatorsResults = (operator, b, a) => ({
        '+': (b, a) => +a + (+b),
        '*': (b, a) => +a * (+b),
        '-': (b, a) => +a - (+b)
    }[operator](b, a) || null);

    const resultStack = expression.reduce((result, current) => {
        if (!isNaN(Number(current))) {
            result.push(current);
            return result;
        }

        if (result.length < 2) {
            return null;
        }

        result.push(operatorsResults(current, result.pop(), result.pop()));
        return result;
    }, []);

    if (resultStack.length !== 1) {
        return null;
    }

    return Number(resultStack.pop());
}
