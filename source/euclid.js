'use strict';

/**
 * Validate input data.
 * @function
 * @param {number} arg - Input number.
 * @throws {SyntaxError}
 * @return {number} - Positive number
 */

const validate = (arg) => {
    if (!Number.isInteger(arg) || arg <= 0) {
        throw new SyntaxError('validation error')
    }
}

/**
 * Finds NOD using euclid algorithm.
 * @function
 * @param {...number} args - Input numbers.
 * @throws {SyntaxError}
 * @return {number} - NOD
 */

const euclid = (...args) => {
    let res;

    try {
        validate(args[0]);
        res = args[0];

        args.forEach(item => {
            validate(item);

            while (res && item) {
                if (res > item) {
                    res %= item;
                } else {
                    item %= res;
                }
            }
            res += item;
        });
    } catch (err) {
        if (err.name === 'SyntaxError') {
            console.log('Error in entered data');
            throw err;
        }

        console.log('Undefined error')
        throw err;

    }

    return res;
}