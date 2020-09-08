'use strict';

const SYMBOL_CODE = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
};

let filter = (input, tagsArray) => {
    if (typeof input !== 'string') {
        throw ("Type of input should be string.");
        return null;
    }

    input = input.replace(/<[^<>]+>|[&"']/g, (match) => {
        let currentTag = match.replace(/[<>/]/g, '');
        if (!tagsArray.includes(currentTag)) {
            match = match.replace(/<|[&"']|>/g, (match) => SYMBOL_CODE[match]);
        }
        return match;
    }).replace(/<(?![^<]*>)/g, '&lt;');
    return input;
};