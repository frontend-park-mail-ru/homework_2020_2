'use strict';

function chess(size) {
    if (isNaN(+size) || size <= 1 || size == Infinity) {
        return null;
    }
    const halfSize = Math.floor(size / 2);
    const isOdd = size % 2;
    const oddRow = '* '.repeat(halfSize) + ((isOdd) ? '*\n' : '\n');
    const evenRow = ' *'.repeat(halfSize) + ((isOdd) ? ' \n' : '\n');
    
    let res = (oddRow + evenRow).repeat(halfSize);
    if (isOdd) {
        res += oddRow;
    }
    return res;
}
