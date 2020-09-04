'use strict';

/**
 * Validate input data.
 * @function
 * @param {number} arg - Input number.
 * @throws {SyntaxError}
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

        args.forEach((item) => {
            validate(item);
            while (res && item) {
                res > item ?
                    res %= item :
                    item %= res;
            }
            res += item;
        });

        return res;
    } catch (err) {
        if (err.name === 'SyntaxError') {
            console.error('Error in entered data');
            throw err;
        }

        console.error('Undefined error')
        throw err;
    }
}