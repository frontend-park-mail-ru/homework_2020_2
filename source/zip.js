'use strict';

/*
* Возвращает единственный объект, содержащий все поля переданных объектов
*
* @param  {objects} Объекты, которые необходимо 'склеить'
* @result {object} Объект, содержащий все свойства переданных объектов
*/
const zip = (...objects) => {
    return objects.reduce((resultObject, currentObject) => {
        if (typeof currentObject !== 'object') {
            throw Error('Некорректный тип входных данных');
        }

        for (let property in currentObject) {
            if (!resultObject[property]) {
                resultObject[property] = currentObject[property];
            }
        }

        return resultObject;
    }, {});
};
