'use strict';

/*function zip(...args) {
    return Object.assign(...args.reverse());
}*/

function zip(...args) {
    let new_obj = {};
    for (let i = args.length - 1; i >= 0; i--) {
        let obj = args[i];
        if (typeof obj !== "object") {
            continue;
        }

        let obj_keys = Object.keys(obj);
        for (let j = 0; j < obj_keys.length; j++) {
            new_obj[obj_keys[j]] = obj[obj_keys[j]];
        }
    }

    return new_obj;
}
