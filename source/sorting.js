'use strict';

/**
 * Принимает на вход массив plain-объектов и массив имён свойств,
 * по которым необходимо отсортировать массив объектов,
 * и реализует устойчивую сортировку этого массива в порядке возрастания
 *
 *
 *
 * @author Erik Nabiev
 *
 * @param {object[]}  objects - массив plain-объектов.
 * @param {string[]} keys - массив имен свойств.
 *
 * @return {object[]} осортированный массив plain-объектов.
 *
 * @example
 * // return [
    {prop1: '1000'},
    {prop1: '200'},
    {prop1: '30'},
    {prop1: '4'}
    ];
 * sorting( [
    {prop1: '30'},
    {prop1: '1000'},
    {prop1: '4'},
    {prop1: '200'}
 ])
 * @example
 * // return [
     {prop1: 1, id: 1},
     {prop1: 1, id: 2},
     {prop1: 2, id: 1},
     {prop1: 2, id: 2},
     {prop1: 3, id: 1},
     {prop1: 3, id: 2},
     {prop1: 4, id: 1},
     {prop1: 4, id: 2}
 ];
 * sorting([
     {prop1: 3, id: 1},
     {prop1: 3, id: 2},
     {prop1: 1, id: 1},
     {prop1: 1, id: 2},
     {prop1: 4, id: 1},
     {prop1: 4, id: 2},
     {prop1: 2, id: 1},
     {prop1: 2, id: 2}
 ])
 * @example
 * // return [
     {prop1: 1, id: '1'},
     {prop1: 2, id: '1'},
     {prop1: 3, id: '1'},
     {prop1: 4, id: '1'},
     {prop1: 1, id: '2'},
     {prop1: 2, id: '2'},
     {prop1: 3, id: '2'},
     {prop1: 4, id: '2'}
 ];
 * letters([
     {prop1: 3, id: '1'},
     {prop1: 3, id: '2'},
     {prop1: 1, id: '1'},
     {prop1: 1, id: '2'},
     {prop1: 4, id: '1'},
     {prop1: 4, id: '2'},
     {prop1: 2, id: '1'},
     {prop1: 2, id: '2'}
 ])
 */

const sorting =  (objects, keys) => {
    if (!Array.isArray(objects)) {
        return [];
    }
    if (!Array.isArray(keys)) {
        return objects;
    }
    keys.reverse().forEach(element => {
        if ( objects.every(oneOf => Number.isNaN(oneOf[element]))) {
            objects.sort( (a, b) => a[element] - b[element])
        } else {
            objects.sort((a,b) => {
                if (a[element] > b[element]) {
                    return 1;
                } else if ( a[element] === b[element] ){
                    return 0;
                } else {
                    return -1;
                }
            });
        }
    })
    return objects;
};