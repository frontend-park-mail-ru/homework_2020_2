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
	});

	QUnit.test('sorting сортирует лексикографически', function (assert) {
		const initial = [
			{prop1: 3, id: '1', word: 'c'},
			{prop1: 3, id: '2', word: 'b'},
			{prop1: 1, id: '1', word: 'a'},
			{prop1: 1, id: '2', word: 'g'},
			{prop1: 4, id: '1', word: 'e'},
			{prop1: 4, id: '2', word: 'f'},
			{prop1: 2, id: '1', word: 'd'},
			{prop1: 2, id: '2', word: 'h'}
		];
		const actual = sorting(initial, [ 'id', 'prop1', 'word' ]);

		const expected = [
			{prop1: 1, id: '1', word: 'a'},
			{prop1: 2, id: '1', word: 'd'},
			{prop1: 3, id: '1', word: 'c'},
			{prop1: 4, id: '1', word: 'e'},
			{prop1: 1, id: '2', word: 'g'},
			{prop1: 2, id: '2', word: 'h'},
			{prop1: 3, id: '2', word: 'b'},
			{prop1: 4, id: '2', word: 'f'}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting отлично сортирует лексикографически', function (assert) {
		const initial = [
			{prop1: 3, id: '1', word: 'acb'},
			{prop1: 3, id: '2', word: 'abc'},
			{prop1: 1, id: '1', word: 'bad'},
			{prop1: 1, id: '2', word: 'bac'},
			{prop1: 1, id: '2', word: 'eadb'},
			{prop1: 1, id: '2', word: 'eada'},

		];
		const actual = sorting(initial, [ 'word' ]);

		const expected = [
			{prop1: 3, id: '2', word: 'abc'},
			{prop1: 3, id: '1', word: 'acb'},
			{prop1: 1, id: '2', word: 'bac'},
			{prop1: 1, id: '1', word: 'bad'},
			{prop1: 1, id: '2', word: 'eada'},
			{prop1: 1, id: '2', word: 'eadb'},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting очень хорошо сортирует символы', function (assert) {
		const initial = [
			{prop1: 3, id: '1', word: 'b'},
			{prop1: 3, id: '2', word: 'd'},
			{prop1: 1, id: '1', word: 'a'},
			{prop1: 1, id: '2', word: 'c'},
			{prop1: 1, id: '2', word: 'f'},
			{prop1: 1, id: '2', word: 'e'},

		];
		const actual = sorting(initial, [ 'word' ]);

		const expected = [
			{prop1: 1, id: '1', word: 'a'},
			{prop1: 3, id: '1', word: 'b'},
			{prop1: 1, id: '2', word: 'c'},
			{prop1: 3, id: '2', word: 'd'},
			{prop1: 1, id: '2', word: 'e'},
			{prop1: 1, id: '2', word: 'f'},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting на примере фамилий и имен', function (assert) {
		const initial = [
			{prop1: 'Иванов Борис'},
			{prop1: 'Иванов Алексей'},
			{prop1: 'Аркадьев Тимур'},
			{prop1: 'Петросян Влад'},
			{prop1: 'Петросян Александр'},
			{prop1: 'Шелухин Андрей'}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 'Аркадьев Тимур'},
			{prop1: 'Иванов Алексей'},
			{prop1: 'Иванов Борис'},
			{prop1: 'Петросян Александр'},
			{prop1: 'Петросян Влад'},
			{prop1: 'Шелухин Андрей'}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку строк', function (assert) {
		const initial = [
			{prop1: 3, id: 'b'},
			{prop1: 3, id: 'a'},
			{prop1: 1, id: 'c'},
			{prop1: 1, id: 'a'},
			{prop1: 4, id: 'c'},
			{prop1: 4, id: 'b'},
			{prop1: 2, id: 'b'},
			{prop1: 2, id: 'a'}
		];
		const actual = sorting(initial, [ 'id' ]);

		const expected = [
			{prop1: 3, id: 'a'},
			{prop1: 1, id: 'a'},
			{prop1: 2, id: 'a'},
			{prop1: 3, id: 'b'},
			{prop1: 4, id: 'b'},
			{prop1: 2, id: 'b'},
			{prop1: 1, id: 'c'},
			{prop1: 4, id: 'c'}
		];

		assert.deepEqual(actual, expected);
	});


});



