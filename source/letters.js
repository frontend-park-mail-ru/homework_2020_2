'use strict';

/**
 * Редактирует строку убирая повторяющияся символы в зависимости от key-второго переданного аргумента.
 *
 * @author Arkadiyche
 * 
 * @param {string} str - строка переданная на вход.
 * @param {boolean | undefined} key - ключ определяющий каким образом будет отредактирована строка.
 * 
 * @return {string} отредактированная строка.
 * 
 * @example
 * // return 'ылру';
 * letters('мама мыла раму')
 * @example
 * // return 'ма ылру';
 * letters('мама мыла раму', true)
 * @example
 * // return 'ыл раму';
 * letters('мама мыла раму', false)
 */

const letters = (str, key) => {
    if (typeof str != 'string') {
        throw new TypeError('Первый аргумент не яв-ся string!');
    }
    if (typeof key != 'boolean' & typeof key != 'undefined') {
        throw new TypeError('Второй аргумент не яв-ся boolean|undefined!');
    }
    return str.split('').filter((val, index, str) =>{
        switch (key) {
            case true:
                return str.indexOf(val) === index;
            case false:
                return str.lastIndexOf(val) === index;
            case undefined:
                return str.lastIndexOf(val) === str.indexOf(val);
        }
    }).join('');
};

