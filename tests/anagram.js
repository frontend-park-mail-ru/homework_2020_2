'use strict';

QUnit.module('Тестируем функцию anagram', function() {
    QUnit.test('Функция работает правильно', function(assert) {
        const input = [
            'кот', 'пила', 'барокко',
            'стоп', 'ток', 'кошка',
            'липа', 'коробка', 'пост'
        ];

        const output = [
            ['барокко', 'коробка'],
            ['кот', 'ток'],
            ['липа', 'пила'],
            ['пост', 'стоп']
        ];

        assert.deepEqual(anagram(input), output);
    });

    QUnit.test('Проверка реакции на передачу некорректного аргумента', function(assert) {
        assert.throws(function() {
            anagram(0);
        }, new TypeError(`Expected 'Array', received number`), 'TypeError');
    });

    QUnit.test('Проверка реакции на передачу массива, состоящего не из строк', function(assert) {
        assert.throws(function() {
            anagram([0, 0, 0, 0, 0]);
        }, new TypeError(
            `Expected Array elements type of 'string', received element of another type`
            ), 'TypeError');
    });

    QUnit.test('Проверка реакции на передачу массива, частично состоящего не из строк', function(
        assert) {
        assert.throws(function() {
            anagram(['abc', 'def', 'ghi', 'j', 0]);
        }, new TypeError(
            `Expected Array elements type of 'string', received element of another type`
            ), 'TypeError');
    });

    QUnit.test('Проверка реакции на передачу пустого массива', function(assert) {
        assert.deepEqual(anagram([]), []);
    });

    QUnit.test('Проверка регистронезависимого поведения', function(assert) {
        const input = ['abc', 'abC', 'aBc', 'aBC', 'Abc', 'AbC', 'ABc', 'ABC'];

        assert.deepEqual(anagram(input), [input.sort()]);
    });
});
