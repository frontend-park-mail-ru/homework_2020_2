'use strict';

const get = (object, property) => {
    return property.split('.').filter((str) => str).reduce((result, key) =>
        (result && result[key] ? result[key] : undefined), object);
};
