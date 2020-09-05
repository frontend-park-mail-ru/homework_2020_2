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
			[ 'кот', 'Ток', 'КТО' ]
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
});
