'use strict';

QUnit.module('Тестируем функцию anagram', function() {
    QUnit.test('Функция работает правильно', function(assert) {
        const inputLetters = ['abc', 'abC', 'aBc', 'aBC', 'Abc', 'AbC', 'ABc', 'ABC'];

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
        assert.deepEqual(anagram([]), []);
        assert.deepEqual(anagram(inputLetters), [inputLetters.sort()]);
    });

    QUnit.test('Функция работает правильно с некорректными аргументами', function(assert) {
        assert.throws(() => { anagram(0); }, new TypeError(
            `Expected 'Array', received ${typeof 0}`));
        assert.throws(() => { anagram(undefined); }, new TypeError(
            `Expected 'Array', received ${typeof undefined}`));
        assert.throws(() => { anagram('hello'); }, new TypeError(
            `Expected 'Array', received ${typeof 'hello'}`));
        assert.throws(() => { anagram({ a: 1, b: 2 }); }, new TypeError(
            `Expected 'Array', received ${typeof { a: 1, b: 2 }}`));

    });

    QUnit.test('Функция работает правильно с массивом, состоящим не из строк', function(assert) {
        assert.throws(() => { anagram([0, 0, 0, 0, 0]); }, new TypeError(
            `Expected Array elements type of 'string', received element of another type`
        ));
        assert.throws(() => { anagram(['abc', 'def', 'ghi', 'j', 0]); }, new TypeError(
            `Expected Array elements type of 'string', received element of another type`
        ));
        assert.throws(() => { anagram([undefined, 0, null]); }, new TypeError(
            `Expected Array elements type of 'string', received element of another type`
        ));
    });
});
