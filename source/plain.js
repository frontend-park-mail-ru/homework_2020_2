'use strict';

function plain (array) {
    if (!Array.isArray(array)) {
        return null;
    }

    return array.reduce((result, element) => {
        return result.concat(Array.isArray(element) ? plain(element) : element);
    }, []);
}

