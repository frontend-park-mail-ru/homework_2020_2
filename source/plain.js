'use strict';

//  7 Вариант, Захаров Иван, АПО-21 :)

const plain = function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
};
