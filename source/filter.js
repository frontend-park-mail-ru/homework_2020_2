'use strict';

const HTML_ENTITY_MAP = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
};

/**
 * filters html code, leaving only allowed html tags.
 * @param {string} input - html code
 * @param {array of strings} tagsArray - allowed tags
 */
let filter = (input, tagsArray) => {
    if (typeof input !== 'string') {
        alert("Type of input should be string.");
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
