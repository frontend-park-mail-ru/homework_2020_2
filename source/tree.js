'use strict';
const star = '*';
const separator = ' ';
const MIN_HEIGHT = 3;
const trunc = '|';

const tree = (h) => {
    if (!Number(h)) {
        return null;
    }
    if (h < MIN_HEIGHT) {
        return null;
    }

    h = Math.floor(h);
    let res = '';

    for (let i = 0; i < (h - 1); i++) {
        const spaces = separator.repeat(h - 2 -i);
        const stars = star.repeat(1 + 2 * i);

        res += `${spaces}${stars}${spaces}\n`;
    }

    const trunc_spaces_number = (( 1 + 2 * (h - 2)) - 1) / 2;
    const trunc_spaces = separator.repeat(trunc_spaces_number);
    const tree_trunc = `${trunc_spaces}${trunc}${trunc_spaces}\n`;
    res += tree_trunc;

    return res;
};
