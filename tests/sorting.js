'use strict';
 
QUnit.module('Тестируем функцию sorting', function () {
    QUnit.test('sorting не меняет пустой массив', function (assert) {
        const initial = [];
        const actual = sorting(initial, []);
 
        const expected = [];
 
        assert.deepEqual(actual, expected);
    });
 
    QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
        const initial = [
            {prop1: 1},
            {prop1: 2},
            {prop1: 3},
            {prop1: 4}
        ];
        const actual = sorting(initial, []);
 
        const expected = [
            {prop1: 1},
            {prop1: 2},
            {prop1: 3},
            {prop1: 4}
        ];
 
        assert.deepEqual(actual, expected);
    });
 
    QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
        const initial = [
            {prop1: 30},
            {prop1: 1000},
            {prop1: 4},
            {prop1: 200}
        ];
        const actual = sorting(initial, [ 'prop1' ]);
 
        const expected = [
            {prop1: 4},
            {prop1: 30},
            {prop1: 200},
            {prop1: 1000}
        ];
 
        assert.deepEqual(actual, expected);
    });
 
    QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
        const initial = [
            {prop1: '30'},
            {prop1: '1000'},
            {prop1: '4'},
            {prop1: '200'}
        ];
        const actual = sorting(initial, [ 'prop1' ]);
 
        const expected = [
            {prop1: '1000'},
            {prop1: '200'},
            {prop1: '30'},
            {prop1: '4'}
        ];
 
        assert.deepEqual(actual, expected);
    });
 
    QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
        const initial = [
            {prop1: 3, id: 1},
            {prop1: 3, id: 2},
            {prop1: 1, id: 1},
            {prop1: 1, id: 2},
            {prop1: 4, id: 1},
            {prop1: 4, id: 2},
            {prop1: 2, id: 1},
            {prop1: 2, id: 2}
        ];
        const actual = sorting(initial, [ 'prop1' ]);
 
        const expected = [
            {prop1: 1, id: 1},
            {prop1: 1, id: 2},
            {prop1: 2, id: 1},
            {prop1: 2, id: 2},
            {prop1: 3, id: 1},
            {prop1: 3, id: 2},
            {prop1: 4, id: 1},
            {prop1: 4, id: 2}
        ];
 
        assert.deepEqual(actual, expected);
    });
 
    QUnit.test('sorting сортирует по нескольким полям', function (assert) {
        const initial = [
            {prop1: 3, id: '1'},
            {prop1: 3, id: '2'},
            {prop1: 1, id: '1'},
            {prop1: 1, id: '2'},
            {prop1: 4, id: '1'},
            {prop1: 4, id: '2'},
            {prop1: 2, id: '1'},
            {prop1: 2, id: '2'}
        ];
        const actual = sorting(initial, [ 'id', 'prop1' ]);
 
        const expected = [
            {prop1: 1, id: '1'},
            {prop1: 2, id: '1'},
            {prop1: 3, id: '1'},
            {prop1: 4, id: '1'},
            {prop1: 1, id: '2'},
            {prop1: 2, id: '2'},
            {prop1: 3, id: '2'},
            {prop1: 4, id: '2'}
        ];
 
        assert.deepEqual(actual, expected);
 
        const three_initial = [
            {prop1: 3, id: '1', a: 'c'},
            {prop1: 3, id: '2', a: 'b'},
            {prop1: 1, id: '1', a: 'a'},
            {prop1: 1, id: '2', a: 'g'},
            {prop1: 4, id: '1', a: 'e'},
            {prop1: 4, id: '2', a: 'f'},
            {prop1: 2, id: '1', a: 'd'},
            {prop1: 2, id: '2', a: 'h'}
        ];
        const three_actual = sorting(three_initial, [ 'id', 'prop1', 'a' ]);
 
        const three_expected = [
            {prop1: 1, id: '1', a: 'a'},
            {prop1: 2, id: '1', a: 'd'},
            {prop1: 3, id: '1', a: 'c'},
            {prop1: 4, id: '1', a: 'e'},
            {prop1: 1, id: '2', a: 'g'},
            {prop1: 2, id: '2', a: 'h'},
            {prop1: 3, id: '2', a: 'b'},
            {prop1: 4, id: '2', a: 'f'}
        ];
        assert.deepEqual(three_actual, three_expected);
    });
 
    QUnit.test('sorting корректно работает с невалидными аргументами', function (assert) {
 
        assert.throws(function(){sorting(42, 42);}, Error('Args should be arrays'),  'Переданы не массивы');
        const initial = [
            {prop1: 10},
            {prop1: 'abc'},
            {prop1: 4},
            {prop1: 200}
        ];
        assert.throws(function(){sorting(initial, ['prop1']);}, Error('Comparing elements should be the same type objects - strings or numbers'),
        'Значение не строка и не число');
    });
});
