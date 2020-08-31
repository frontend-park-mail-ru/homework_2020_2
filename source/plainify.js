'use strict';

/**
 * Функция превращает входной объект в plain-объект
 * @param {object} object – исходный объект
 * @returns {object} plain-объект
 */
const plainify = object => {
    if (!isObject(object)) {
        return {};
    }

    return Object.entries(object).reduce((acc, map) => ({
        ...acc,
        ...copyContent(map),
    }), {});
};

/**
 * Функция проверяет является ли значение объектом.
 * @param {object} value
 * @returns {boolean}
 */
const isObject = value => {
    return value ? value.constructor === Object : false;
};

/**
 * Функция добавляет [ключ, значение] в plain-объект
 * @param {object} map - пара [ключ, значение]
 * @returns {object}
 */
const copyContent = map => {
    const [key, value] = map;

    if (!isObject(value)) {
        return {[key]: value};
    }

    return Object.entries(plainify(value)).reduce((acc, childMap) => {
        const [childKey, childValue] = childMap;
        return {...acc, [`${key}.${childKey}`]: childValue };
    }, {})
};
