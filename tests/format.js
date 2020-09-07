'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input1 = [ 0, 1, 2, 10, 100, 1000, 10000 ];
		const input2 = [ 10000000, 1, 20000000000, 10, 100, 1000, 10000 ];

		const expected1 =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		const expected2 =
			'   10000000\n' +
			'          1\n' +
			'20000000000\n' +
			'         10\n' +
			'        100\n' +
			'       1000\n' +
			'      10000';

		assert.strictEqual(format(input1, 1), expected1);
		assert.strictEqual(format(input2, 1), expected2);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input1 = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];
		const input2 = [ -1000000, 1, 2, 10, -10000000, -100, 1000, 10000, -10000 ];

		const expected1 =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		const expected2 =
			' -1000000\n' +
			'        1\n' +
			'        2\n' +
			'       10\n' +
			'-10000000\n' +
			'     -100\n' +
			'     1000\n' +
			'    10000\n' +
			'   -10000';

		assert.strictEqual(format(input1, 1), expected1);
		assert.strictEqual(format(input2, 1), expected2);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected1 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected2 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		const expected3 =
			'     0    1    2    10\n' +
			'   100 -100 1000 10000\n' +
			'-10000';


		assert.strictEqual(format(input, 2), expected1);
		assert.strictEqual(format(input, 3), expected2);
		assert.strictEqual(format(input, 4), expected3);
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
		const input2 = [ , , , , 2, , , , 44444, , , ,333, , , ,11, , , ,555555555 ];

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

		const expected3 =
			'                       2\n' +
			'                 44444  \n' +
			'             333        \n' +
			'          11            \n' +
			'555555555';


		assert.strictEqual(format(input, 2), expected1);
		assert.strictEqual(format(input, 3), expected2);
		assert.strictEqual(format(input2, 5), expected3);
	});

	QUnit.test('format работает правильно для одной строки', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'0 1 2 10 100 -100 1000 10000 -10000';

		assert.strictEqual(format(input, 9), expected);
	});

	QUnit.test('format работает правильно для широкой таблицы', function (assert) {
		const input1 = [0, 1, 2, 3, 10, -20, 1000, 10000, -1000,
			-10000, 10000, 1000, 10, 100, -100, 100, 500, -7
		];

		const input2 = [0, 1, 2, 3, 10, -20, 1000, 10000, -1000,
			-10000, 10000
		];

		const expected1 =
			'     0     1    2  3  10  -20 1000 10000 -1000\n'+
			'-10000 10000 1000 10 100 -100  100   500    -7';

		const expected2 =
			'     0     1 2 3 10 -20 1000 10000 -1000\n'+
			'-10000 10000';

		assert.strictEqual(format(input1, 9), expected1);
		assert.strictEqual(format(input2, 9), expected2);
	});

	QUnit.test('format работает правильно, если в качестве исходных данных для вывода подается не массив', function (assert) {
		const input = 100;

		const expected = SyntaxError('wrong type');

		assert.throws(() => format(input, 2), expected);
	});

	QUnit.test('format работает правильно, если в качестве количества колонок подается не число', function (assert) {
		const input = [0, 1];

		const expected = SyntaxError('wrong type');

		assert.throws(() => format(input, '2'), expected);
	});

	QUnit.test('format работает правильно, если оба аргумента неправильного типа', function (assert) {
		const input = 100;

		const expected = SyntaxError('wrong type');

		assert.throws(() => format(input, '2'), expected);
	});
});
