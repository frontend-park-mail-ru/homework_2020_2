'use strict';

QUnit.module('Тестируем функцию isObject', function () {
    QUnit.test('Функция isObject работает правильно.', function (assert) {
        assert.deepEqual(isObject({}), true, 'Должен возвращать true для Object');
        assert.deepEqual(isObject(undefined), false, 'Должен возвращать false для undefined');
        assert.deepEqual(isObject(null), false, 'Должен возвращать false для null');
        assert.deepEqual(isObject(NaN), false, 'Должен возвращать false для NaN');
        assert.deepEqual(isObject(new Date()), false, 'Должен возвращать false для Date');
        assert.deepEqual(isObject(1), false, 'Должен возвращать false для number');
        assert.deepEqual(isObject('string'), false, 'Должен возвращать false для string');
        assert.deepEqual(isObject([1, 2, 3]), false, 'Должен возвращать false для array');
        assert.deepEqual(isObject(String('aaa')), false, 'Должен возвращать false для String()');
        assert.deepEqual(isObject(new Map()), false, 'Должен возвращать false для Map()');
        assert.deepEqual(isObject(new Set()), false, 'Должен возвращать false для Set()');
    });
});