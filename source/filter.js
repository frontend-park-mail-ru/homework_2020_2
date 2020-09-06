'use strict'

// словарь с тем, что нужно будет экранировать

const needReplace = new Map ([
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['&', '&amp;'],
    ['\'', '&#39;'],
    ['"', '&quot;']
]);

let filter = (html, validTags) => {
	// проверка типов входных данных
    if  (typeof html !== 'string' || !Array.isArray(validTags)) {
        return null;
    }

    // ищем либо тег, либо символ
    return html.replace(/<[^<>]*>|[&"'><]/g, (symbols) => {
    	// очищаем значение тега от <>/
        let tagValue = symbols.replace(/[<>/]/g, '');

        // если не входит в список валидных, то проводим экранирование из словаря
        // если входит, то не трогаем
        if (!validTags.includes(tagValue)) {
            return symbols.split('').map((char) => {
                return needReplace.has(char) ? needReplace.get(char) : char;
            }).join('');
        }
        return symbols;
    });
};
