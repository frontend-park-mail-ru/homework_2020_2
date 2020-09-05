'use strict';

/**
 * parameters: function get() gets 2 parameters: object (the object we wanna explore) and
 * path_to_prop (the path to the properties we wanna get)
 * returning value: function returns value of properties or undefined in case properties doesn't exist
 * */

// let reducer = (object, property) =>  {
//     if (!(object && object[property])) {
//         return undefined;
//     } else {
//        return object[property];
//     }
// };
//
// let get = (obj, path_to_prop) => {
//     if (!obj) {
//         return undefined;
//     }
//     if (path_to_prop =='.') {
//         return obj;
//     }
//     let props = path_to_prop.split('.').slice(1);
//     // console.log(props);
//     props.reduce(reducer, obj);
//     return props[0];
// };


let get = (object, path_to_prop) => {
    if (!path_to_prop) {
        return undefined;
    }
    if (path_to_prop == '.') {
        return object;
    }
    let props = path_to_prop.split('.').slice(1);
    props.forEach(prop => {
        if (!(object && object[prop])) {
            object = undefined;
            return undefined;
        }
        object = object[prop];
    });
    return object;
};