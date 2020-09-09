'use strict'
 
const needReplace = new Map ([
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['&', '&amp;'],
    ['\'', '&#39;'],
    ['"', '&quot;']
]);
 
/**
 * Escapes invalid html html tags.
 * @param {string} html - String with html tags or symbols.
 * @param {string[]} validTags - Tags allowed to use.
 * @returns {string} Filtered string.
 */
 
const filter = (html, validTags) => {
    if  (typeof html !== 'string') {
        throw Error('First arg must be a string!')
    }
 
    if (!Array.isArray(validTags)) {
        throw Error('Second arg must be an Array')
    }
 
    if (validTags.some((element) => typeof element !== 'string')) {
        throw Error('Must be only Array of strings')
    }
 
    return html.replace(/<[^<>]*>|[&"'><]/g, (symbols) => {
        const tagValue = symbols.replace(/[<>/]/g, '');
        if (!validTags.includes(tagValue)) {
            return symbols.split('').map((char) => needReplace.get(char) || char).join('');
        }
        return symbols;
    });
};
