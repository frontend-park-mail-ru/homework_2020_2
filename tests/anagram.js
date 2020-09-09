'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Игнорирование регистра при поиске анаграмм', function (assert) {
		const input = [
			'кот', 'пост', 'Ток',
			'КТО', 'спать', 'котТт'
		];

		const output = [
			[ 'КТО', 'Ток', 'кот' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Игнорирование небуквенных символов при поиске анаграмм', function (assert) {
		const input = [
			'к???о т', 'п0Sт',
			'то123к45', 'Sт0п'
		];

		const output = [
			[ 'Sт0п', 'п0Sт' ],
			[ 'к???о т', 'то123к45' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка на уникальность слов', function (assert) {
		const input = [
			'кот', 'кот',
			'акрон', 'кошка', 'норка'
		];

		const output = [
			[ 'акрон', 'норка' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка входных данных: на вход подается не массив', function (assert) {
		const input = 'кот';
		const output = null;

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка входных данных: на вход подается пустой массив слов', function (assert) {
		const input = [];
		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test(`Проверка входных данных: массив состоит не только из слов/string
					  или не содержит их вовсе`, function (assert) {
		const testObject = {
			name: 'Joe',
			age: 42
		};

		const objectInput = [
			testObject
		];
		const mixedInput = [
			'кот', 42, 'ток', testObject
		];

		const mixedOutput = [
			[ 'кот', 'ток' ]
		];

		assert.deepEqual(anagram(objectInput), []);
		assert.deepEqual(anagram(mixedInput), mixedOutput);
	});
});
