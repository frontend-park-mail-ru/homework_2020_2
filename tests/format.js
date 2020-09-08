'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format обрабатывает неправильный ввод количества столбцов', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		assert.throws(() => format(input, 0), new Error('Некорректный тип входных данных'));
		assert.throws(() => format(input, -1), new Error('Некорректный тип входных данных'));
		assert.throws(() => format(input, undefined), new Error('Некорректный тип входных данных'));
		assert.throws(() => format(input, null), new Error('Некорректный тип входных данных'));
	});

	QUnit.test('format работает правильно c пустыми строками', function (assert) {
		const input = [, 1, 2, , 100, -100, 1000, , -10000 ];

		const expected3 =
			'   1    2    100\n' +
			'-100 1000 -10000';

		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format обрабатывает ситуацию, когда на вход дан не массив', function (assert) {
		assert.throws(() => format(1, 1), new Error('Некорректный тип входных данных'));
		assert.throws(() => format(undefined, 1), new Error('Некорректный тип входных данных'));
		assert.throws(() => format(null, 1), new Error('Некорректный тип входных данных'));
	});
});
