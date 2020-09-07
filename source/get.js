'use strict';

/**
 * parameters: function get() gets 2 parameters: object (the object we wanna explore) and
 * path_to_prop (the path to the properties we wanna get)
 * returning value: function returns value of properties or undefined in case properties doesn't exist
 * */

const get = (object, path_to_prop) => {
    if (!path_to_prop) {
        throw Error('Некорректный тип входных данных');
    }
    if (!object) {
        return undefined;
    }
    if (path_to_prop ==='.') {
        return object;
    }
    let props = path_to_prop.split('.').filter(prop => prop.length > 0);
    return props.reduce((accumulator, property) =>
        accumulator? accumulator[property] : undefined, object);
};
