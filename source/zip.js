'use strict';

/*
* Возвращает единственный объект, содержащий все поля переданных объектов
*
* @param  {objects} Объекты, которые необходимо 'склеить'
* @result {object} Объект, содержащий все свойства переданных объектов
*
* */
const zip = (...objects) => {
    let resultObject = {}

    for (let object of objects) {
        if(typeof object !== 'object') {
            throw Error('Некорректный тип входных данных');
        }

        for (let property in object) {
            if (resultObject[property] === undefined) {
                resultObject[property] = object[property];
            }
        }
    }
    return resultObject;
};
