/** @description check input argument for non-negative, not infinite integer number
 *  @param {number} num - input argument for validation
 *  @return {boolean} result of check
 **/
const isValidNumber = num => Number.isInteger(num) && num >= 0;

/** @description exceptions generator
 *  @param err_value - object caused exception
 *  @param {string} err_msg - error message
 **/
function InputArgFormatException(err_value, err_msg = 'Invalid argument format: ') {
    this.message = err_msg + err_value;
    this.toString = function () {
        return this.message;
    }
}

/** @description for zero arguments make infinite treatment
 *  @param {number} a - first number for GCD
 *  @param {number} b - second number for GCD
 *  @return {number|Infinity} GCD for two arguments
 **/
const infiniteTreatment = (a, b) => {
    if (!a && !b)
        return Infinity;
    return a === 0 ? b : a;
}

/** @description find GCD for two validated numbers
 *  @param {number} a - first number for GCD
 *  @param {number} b - second number for GCD
 *  @return {number|Infinity} GCD for two arguments
 **/
const twoNumbersGcd = (a, b) => {
    if (!a || !b)
        return infiniteTreatment(a, b);
    while (a && b) {
        a > b ? a %= b : b %= a;
    }
    return (a + b);
}

/** @description validate user input and throw exceptions by errors in input
 * @param {[]} numbers
 * @return {number} length of numbers list
 **/
const inputChecker = (numbers) => {
    const length = numbers?.length;

    if (!length)
        throw new InputArgFormatException(length, 'Empty sequence: length = ');
    numbers.forEach(elem => {
        if (!isValidNumber(elem)) throw new InputArgFormatException(elem);
    });

    return length;
}

/** @description Finding GCD for any number of arguments
 *  @param {...} numbers - sequence of numbers
 *  @return {number} integer number - GCD of input sequence
 **/
const euclid = (...numbers) => {
    const length = inputChecker(numbers);
    let gcdTemp = numbers[0];

    for (let i = 0; i < length - 1; ++i) {
        gcdTemp = twoNumbersGcd(gcdTemp, numbers[i + 1]);
    }

    return gcdTemp;
}
