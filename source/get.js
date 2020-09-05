'use strict';

const get = function(object, property) {
    if (property === '.') {
        return object;
    }

    let property_levels = property.split(".").filter(str => str);

    let current_property = object;
    for (let level in property_levels) {
        if (current_property.hasOwnProperty(property_levels[level])) {
            current_property = current_property[property_levels[level]];
        } else {
            return undefined;
        }
    }

    return current_property;
};
