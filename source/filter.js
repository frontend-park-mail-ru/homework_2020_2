'use strict';

const HTML_ENTITY_MAP = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;',
};

const TAGS_OR_SYMBOLS_RE = /<[^<>]+>|[<&"'>]/g;
const GET_TAG_RE = /[<>/]/g;
const FIND_SYMBOLS_RE = /[<&"'>]/g;

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
    
    return input.replace(TAGS_OR_SYMBOLS_RE, (match) => {
        const currentTag = match.replace(GET_TAG_RE, '');
        return tagsArray.includes(currentTag) ? match : 
            match.replace(FIND_SYMBOLS_RE, (match) => HTML_ENTITY_MAP[match]);
    });
};

