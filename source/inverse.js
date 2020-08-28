'use strict';

function inverse(array, immovable) {
    if (immovable !== undefined && immovable !== 0) {
            const firstElements = array.slice(0, immovable);
            const secondElements = array.slice(immovable, array.length);

            if (immovable > 0) {
                return [...firstElements, ...secondElements.reverse()]
            } else if (immovable < 0) {
                return [...firstElements.reverse(), ...secondElements]
            }
        }

    return array.reverse();
}
