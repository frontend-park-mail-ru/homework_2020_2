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

	QUnit.test('format работает правильно c пропусками для числами разного знака и одной колонки', function (assert) {
		const input = [  , 1, 2, 10,  , -100, 1000, , -10000 ];

		const expected =
			'      \n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'      \n' +
			'  -100\n' +
			'  1000\n' +
			'      \n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c пропусками для нескольких колонок', function (assert) {
		const input = [ 0, 1, 2, , , -100, 1000, 10000, -10000 ];

		const expected1 =
			'     0     1\n' +
			'     2      \n' +
			'        -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected2 =
			'   0     1      2\n' +
			'             -100\n' +
			'1000 10000 -10000';


		assert.strictEqual(format(input, 2), expected1);
		assert.strictEqual(format(input, 3), expected2);
	});

	QUnit.test('format работает правильно для одной строки', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'0 1 2 10 100 -100 1000 10000 -10000';

		assert.strictEqual(format(input, 9), expected);
	});

	QUnit.test('format работает правильно для широкой таблицы', function (assert) {
		const input = [0, 1, 2, 3, 10, -20, 1000, 10000, -1000,
			-10000, 10000, 1000, 10, 100, -100, 100, 500, -7
		];

		const expected =
			'     0     1    2  3  10  -20 1000 10000 -1000\n'+
			'-10000 10000 1000 10 100 -100  100   500    -7';

		assert.strictEqual(format(input, 9), expected);
	});


});
