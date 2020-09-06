'use strict';

/**
 * По заданному пути находит значение объекта и меняет на новое.
 * В случае, когда объектов, соответствующих заданным в пути, не существует,
 * функция создает их.
 * @param object {object} - объект, подлежащий изменению.
 * @param keys {string} - путь, составленный из ключей объектов.
 * @param value {*} - значение, которое необходимо задать объекту.
 * @returns {object} - измененный объект.
 */

const set = (object, keys, value) => {
    let objectPart = object;
    const path = keys.split('.');
    path.shift();

    const isEmpty = (obj) => typeof obj == 'object' ? Object.keys(obj).length === 0 : true;

    path.forEach((key, i, path) => {
        if (i === path.length - 1) {
            return;
        }
        objectPart = isEmpty(objectPart) ? objectPart[path[i]] = {} : objectPart[path[i]];
    });

    objectPart[path[path.length - 1]] = value;
    return object;
}
