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
        const testData = [0, undefined, 'hello', { a: 1, b: 2 }];

        testData.forEach((element) => {
            assert.throws(() => { anagram(element); }, new TypeError(
                `Expected 'Array', received ${typeof (element)}`));
        });
    });

    QUnit.test('Функция работает правильно с массивом, состоящим не из строк', function(assert) {
        const testData = [
            [0, 0, 0, 0, 0],
            ['abc', 'def', 'ghi', 'j', 0],
            [undefined, 0, null]
        ];

        testData.forEach((element) => {
            assert.throws(() => { anagram(element); }, new TypeError(
                `Expected Array elements type of 'string', received element of another type`
            ));
        });
    });
});
