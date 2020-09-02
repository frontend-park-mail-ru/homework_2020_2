'use strict';

const sort = function (text) {
    let array_text = text.split(' ');

    let collator = new Intl.Collator();

    array_text.forEach(function(item, i, arr) {
        item = item.toLowerCase();
        item = item.split('').sort(function(a, b) {
            return collator.compare(a, b);
        }).join('');
        arr[i]  = item;
    });

    array_text.sort(function(a, b) {
        return collator.compare(a, b);
    })

    array_text.forEach(function(item, i, arr) {
        item = item[0].toUpperCase() + item.substring(1);
        arr[i]  = item;
    });

    let result_str = array_text.join(' ');
    return result_str;
}
