'use strict';

const get = function (object, property) {
    const properties = property.split('.').filter(str => str);



    let result = object;

    for (let level of properties) {
        if (!result) {
            break;
        }

        result = (result.hasOwnProperty(level) ? result[level] : undefined);
    }

    return result;
};
