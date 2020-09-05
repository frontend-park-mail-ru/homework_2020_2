const needReplace = new Map ([
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['&', '&amp;'],
    ['\'', '&#39;'],
    ['"', '&quot;']
]);

let filter = (html, validTags) => {
    if  (typeof html !== 'string' || !Array.isArray(validTags)) {
        return null;
    }

    return html.replace(/<[^<>]*>|[&"'><]/g, (symbols) => {
        let tagValue = symbols.replace(/[<>/]/g, '');
        if (!validTags.includes(tagValue)) {
            return symbols.split('').map((char) => {
                return needReplace.has(char)?needReplace.get(char):char;
            }).join('');
        }
        return symbols;
    });
};
