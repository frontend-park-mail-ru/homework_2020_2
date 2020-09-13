'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});
	QUnit.test('solve работает правильно с негативными числами', function (assert) {
		assert.strictEqual(solve('x + -2', 1), -1);
		assert.strictEqual(solve('-5 + x * -4 + 3', 2), -10);
		assert.strictEqual(solve('(-1 + (-6 * -1) + -3) * x', -1), -2);
		assert.strictEqual(solve('1 + (-x * 2) - -2 * 2', 3), -1);
	});
	QUnit.test('solve корректно обрабатывает '
			+ 'некорректный синтаксис выражения', function (assert) {
		assert.throws(() => solve('x + 1.5', 1), SyntaxError);
		assert.throws(() => solve('x x + 1', 1), SyntaxError);
		assert.throws(() => solve('xx + 1', 1), SyntaxError);
		assert.throws(() => solve('(x + ((1)', 1), SyntaxError);
		assert.throws(() => solve('()', 1), SyntaxError);
		assert.throws(() => solve('1 + 2 + y', 0), SyntaxError);
	});
	QUnit.test('solve корректно обрабатывает '
			+ 'некорректное значение аргумента выражения', function (assert) {
		assert.throws(() => solve(0, 0), TypeError);
		assert.throws(() => solve('x', ''), TypeError);
		assert.throws(() => solve('x + 1', 1.5), TypeError);
	});
});
