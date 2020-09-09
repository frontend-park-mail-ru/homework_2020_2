'use strict';

/**
 * Меняет порядок элементов в массиве на противоположный
 *
 * @param {array} arr - входной массив
 * @param {number} to - колличество элементов, которые сохраняют свои места
 * @returns {array}
 */

const inverse = (arr, to = 0) => {
    if (!Array.isArray(arr) || !Number.isInteger(to)) {
        return arr;
    }

    let arrNew = arr;
    return to >= 0 ? [...arrNew.splice(0, to), ...arrNew.reverse()] :
        [...arrNew.splice(0, arrNew.length + to).reverse(), ...arrNew]
}