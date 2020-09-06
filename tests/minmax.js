'use strict';

QUnit.module('Тестируем функцию minmax', function () {
	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax(''), [ undefined, undefined ], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmax('мама мыла раму'), [ undefined, undefined ]);
	});

	QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
		assert.deepEqual(minmax('0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1'), [ 1, 1 ]);
		assert.deepEqual(minmax('Infinity'), [ Infinity, Infinity ]);
		assert.deepEqual(minmax('-Infinity'), [ -Infinity, -Infinity ]);
		assert.deepEqual(minmax('42'), [ 42, 42 ]);
		assert.deepEqual(minmax('-7'), [ -7, -7 ]);
		assert.deepEqual(minmax('.0'), [ .0, .0 ]);
		assert.deepEqual(minmax('1.1'), [ 1.1, 1.1 ]);
		assert.deepEqual(minmax('.01'), [ .01, .01 ]);
		assert.deepEqual(minmax('1.01'), [ 1.01, 1.01 ]);
		assert.deepEqual(minmax('1e5'), [ 1e5, 1e5 ]);
		assert.deepEqual(minmax('-1e-5'), [ -1e-5, -1e-5 ]);
		assert.deepEqual(minmax('-.1e-5'), [ -.1e-5, -.1e-5 ]);
	});

	QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmax('0 0 0 0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1 1 1 1'), [ 1, 1 ]);
		assert.deepEqual(minmax('1 2 3 4'), [ 1, 4 ]);
		assert.deepEqual(minmax('-1 2 -3 4'), [ -3, 4 ]);
		assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [ -Infinity, Infinity ]);
		assert.deepEqual(minmax('-.01 0 .01'), [ -.01, .01 ]);
	});

	QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [ -5.8, 73 ]);
		assert.deepEqual(minmax('3 поросёнка'), [ 3, 3 ]);
		assert.deepEqual(minmax('3 поросёнка и 7 козлят'), [ 3, 7 ]);
	});

	QUnit.test('minmax работает правильно с повторяющимися числами', function (assert) {
		assert.deepEqual(minmax('-4 -1 -1 -4'), [ -4, -1 ]);
		assert.deepEqual(minmax('7 7 2 7'), [ 2, 7 ]);
		assert.deepEqual(minmax('-42 -43 -42 -45'), [ -45, -42 ]);
	});
});
