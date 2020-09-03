'use strict';

const inverse = (arr, offset = 0) => (offset < 0) ?
    arr.slice(0, offset).reverse().concat(arr.slice(offset)) : arr.slice(0, offset).concat(arr.slice(offset).reverse());