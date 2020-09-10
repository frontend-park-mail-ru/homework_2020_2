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

	QUnit.test('Пустой ввод', function (assert) {
		const input = [];
		const output = [];
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Три слова в группе', function (assert) {
		const input = ['abc', 'acb', 'bac',
						'wer', 'rwe', 'rew',];
		const output = [
			[
				"abc",
				"acb",
				"bac"
			],
			[
				"rew",
				"rwe",
				"wer"
			]
			];
		assert.deepEqual(anagram(input), output);
	});

	const input = ['abd', 'gcb', 'tac',
		'wor', 'rie', 'ruw',];
	QUnit.test('Нет анаграмм', function (assert) {
		const output = [];
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Если в функцию подается неправильные аргумен', function (assert) {
		assert.throws(() => anagram(), Error('First argument is required'));
		assert.throws(() => anagram(1), TypeError('First argument not array'));
		assert.throws(() => anagram(["abcd", 3, "fhfr"]), TypeError('Array contains not only words'));
	})
});
