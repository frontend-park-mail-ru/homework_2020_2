'use strict';

/**
 * @description Creates a tree of stars for the given height
 * @param {number} height Height of the tree
 * @throws {TypeError} Argument height must be convertible to a number.
 * @returns {string|null} Returns a string with a tree. If height < 3 returns null.
 */
const tree = (height) => {
    height = Number(height);

    if (isNaN(height)) {
      throw new TypeError('Argument height is not a number.');
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
        padding--;
        width = width + 2;
    }
    // tree trunk
    padding = Math.floor(width / 2 - 1);
    tree.push(
        `${' '.repeat(padding)}|${' '.repeat(padding)}`
    );
    return tree.join('\n') + '\n';
}

