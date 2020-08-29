'use strict';

function zip(...args) {
    return Object.assign(...args.reverse());
}
