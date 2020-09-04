'use strict';

/*function zip(...args) {
    return Object.assign(...args.reverse());
}*/

/*function zip(...args) {
    const new_obj = {};
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
}*/

function zip(...args) {
    return args.reverse().reduce((acc, obj) => {
        if (typeof obj !== "object") {
            return acc;
        }

        Object.keys(obj).forEach(key => {
            acc[key] = obj[key];
        });

        return acc;
    }, {});
}

