'use strict';

/**
 * Функция превращает входной объект в plain-объект
 * @param {object} object
 * @returns {object} plain-объект
 */
const plainify = (object) => {
    const reducer = (acc, obj) => ({
        ...acc,
        ...copyContent(acc, obj)
    });

    return isObject(object) ? Object.entries(object).reduce(reducer, {}) : {};
};

/**
 * Функция проверяет является ли значение объектом.
 * @param {object} value
 * @returns {boolean}
 */
const isObject = (value) => {
    return value ? value instanceof Object : false;
};

/**
 * Функция добавляет [ключ, значение] в plain-объект
 * @param {object} globalAcc
 * @param {object} globalObj
 * @returns {object}
 */
const copyContent = (globalAcc, globalObj) => {
    const [key, value] = globalObj;

    const reducer = (acc, obj, globalKey) => {
        const [key, value] = obj;
        return {...acc, [`${globalKey}.${key}`]: value };
    };

    return isObject(value) ?
        Object.entries(plainify(value)).reduce((acc, obj) => reducer(acc, obj, key), {})
        : {...globalAcc, [key]: value};
};
