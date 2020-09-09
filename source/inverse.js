'use strict';

const inverse = function (arr, to = 0) {
    if(typeof arr != 'object' || typeof to != 'number') {
        return arr;
    }
    let res = []
    if (to >= 0) {
        let splice_arr = arr.splice(0, to);
        let reverse_arr = arr.reverse();
        res = splice_arr.concat(reverse_arr);
    } else {
        let splice_arr = arr.splice(to, Math.abs(to));
        let reverse_arr = arr.reverse();
        res = reverse_arr.concat(splice_arr);
    }
    return res;
}