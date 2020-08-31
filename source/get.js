'use strict';

function get(object, path_to_prop) {
    if (path_to_prop == '.') {
        return object;
    }
    let props = path_to_prop.split('.');
    let i = 1;
    let res = object;
    for (i; i < props.length; i++) {
        if ((res[props[i]]) == undefined) {
            return undefined;
        } else {
            res = res[props[i]];
        }
    }
    return res;
}
