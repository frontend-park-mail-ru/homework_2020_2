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

    return Object.entries(object).reduce((acc, currentValue) => ({
        ...acc,
        ...plainifyInner(currentValue),
    }), {});
};

/**
 * Функция проверяет, является ли значение объектом.
 * @param {object} value
 * @returns {boolean}
 */
const isObject = value => {
    return value ? value.constructor === Object : false;
};

/**
 * Функция возвращает plain-объект
 * @param {object} entry - пара [ключ, значение]
 * @returns {object}
 */
const plainifyInner = entry => {
    const [key, value] = entry;

    if (!isObject(value)) {
        return {[key]: value};
    }

    return Object.entries(plainify(value)).reduce((acc, currentValue) => {
        const [childKey, childValue] = currentValue;
        const newKey = `${key}.${childKey}`;
        return {...acc, [newKey]: childValue };
    }, {})
};
