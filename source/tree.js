'use strict';

/**
 * @description Creates a tree of stars for the given height
 * @param {number|string} height Height of the tree
 * @throws {TypeError} Argument height must be convertible to a number.
 * @returns {string|null} Returns a string with a tree. If height < 3 returns null.
 */
const tree = (height) => {
    const type = typeof height;
    if (type !== 'string' && type !== 'number') {
        throw new TypeError('Argument height is not a number|string.');
    }

    height = parseInt(height);

    if (isNaN(height)) {
      throw new TypeError('Argument height is not a valid number.');
    }

    if (height < 3) {
        return null;
    }

    let width = 1;
    let padding = height - 2;
    const tree = [];

    // upper part of the tree
    for (let i = 1; i < height; i++) {
        tree.push(
            `${' '.repeat(padding)}${'*'.repeat(width)}${' '.repeat(padding)}`
        );
        padding -= 1;
        width += 2;
    }
    // tree trunk
    padding = Math.floor(width / 2 - 1);
    tree.push(
        `${' '.repeat(padding)}|${' '.repeat(padding)}`
    );
    return tree.join('\n') + '\n';
}
