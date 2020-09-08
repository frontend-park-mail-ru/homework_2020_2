/** @description check input argument for non-negative, not infinite integer number
 *  @param {number} num - input argument for validation
 *  @return {boolean} result of check
 **/
const isValidNumber = num => Number.isInteger(num) && num >= 0;

/** @description exceptions generator
 *  @param errValue - object caused exception
 *  @param {string} errMsg - error message
 **/
const inputArgFormatException = (errValue, errMsg = 'Invalid argument format: ') =>
    new Error('${errMsg} ${errValue}')

/** @description for zero arguments make infinite treatment
 *  @param {number} a - first number for GCD
 *  @param {number} b - second number for GCD
 *  @return {number} GCD for two arguments
 **/
const infiniteTreatment = (a, b) => {
    if (!a && !b) {
        return Infinity;
    }
    return a === 0 ? b : a;
}

/** @description find GCD for two validated numbers
 *  @param {number} a - first number for GCD
 *  @param {number} b - second number for GCD
 *  @return {number} GCD for two arguments
 **/
const twoNumbersGcd = (a, b) => {
    if (!a || !b) {
        return infiniteTreatment(a, b);
    }
    while (a && b)
        a > b ? a %= b : b %= a;
    return a + b;
}

/** @description validate user input and throw exceptions by errors in input
 * @param {number[]} numbers
 * @return {number} length of numbers list
 **/
const inputChecker = (numbers) => {
    const length = numbers?.length;

    if (!length) {
        throw inputArgFormatException(length, 'Empty sequence: length = ');
    }
    numbers.forEach(elem => {
        if (!isValidNumber(elem)) {
            throw inputArgFormatException(elem);
        }
    });

    return length;
}

/** @description Finding GCD for any number of arguments
 *  @param {number} numbers - sequence of numbers
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
