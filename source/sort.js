'use strict'

/**
 *
 * @param str
 * @example
 * sort('i love frontend')
 * // returns 'Defnnort Elov I'
 * @returns {string} Returns sorted words in string with uppercase letter in every word
 */

const sort = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError(`fail type: ${typeof str}`)
    }
    if (!str) {
        throw new SyntaxError(`fail syntax: "${str}"`)
    }

    const words = str.trim().split(/\s+/)

    const collator = new Intl.Collator();

    const sortedWordsLikeArray = words.map((element) => {
        element = element.split('').sort((a, b) =>
            collator.compare(a, b)).join('').toLowerCase().split('')

        element[0] = element[0].toUpperCase()
        return element.join('')
    });

    return sortedWordsLikeArray.sort((a, b) =>
        collator.compare(a, b)).join(' ')
}
