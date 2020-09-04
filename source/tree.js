'use strict';
const STAR = '*';
const SEPARATOR = ' ';
const MINHEIGHT = 3;
const TRUNC = '|';

/**
 * Creates a tree with height h
 * @returns {String} Returns picture of our tree.
 * @param h - number
 */
const tree = (h) => {
    if (!isFinite(h)) {
        return null;
    }
    if (h < MINHEIGHT) {
        return null;
    }

    h = Math.floor(h);
    let res = '';

    for (let i = 0; i < (h - 1); i++) {
        const spaces = SEPARATOR.repeat(h - 2 -i);
        const stars = STAR.repeat(1 + 2 * i);

        res += `${spaces}${stars}${spaces}\n`;
    }

    const truncSpacesNumber = (( 1 + 2 * (h - 2)) - 1) / 2;
    const truncSpaces = SEPARATOR.repeat(truncSpacesNumber);
    const treeTrunc = `${truncSpaces}${TRUNC}${truncSpaces}\n`;
    res += treeTrunc;

    return res;
};
