'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
		assert.strictEqual(solve('1 + 2 + 3 + 4', 1), 10);
		assert.strictEqual(solve('   1 -  2  -3 + 4', 1), 0);
	});

	QUnit.test('solve отвечает корректной ошибкой при неверном выражении', function (assert){
		assert.throws(() => solve('abcx',1), new SyntaxError(INVALID_MATH_EXPRESSION));
		assert.throws(() => solve('x + 5a + 3b + x^2',1), new SyntaxError(INVALID_MATH_EXPRESSION));
		assert.throws(() => solve('x + x^2',1), new SyntaxError(INVALID_MATH_EXPRESSION));
		assert.throws(() => solve('4 + 3 + 2 + null',1), new SyntaxError(INVALID_MATH_EXPRESSION));
		assert.throws(() => solve('a + b + c',1), new SyntaxError(INVALID_MATH_EXPRESSION));
	});

	QUnit.test('solve отвечает корректной ошибкой при неправильном типе входных аргументов', function (assert){
		assert.throws(() => solve(1,1), new TypeError(WRONG_FUNCTION_PARAMS));
		assert.throws(() => solve("asd","asd"), new TypeError(WRONG_FUNCTION_PARAMS));
		assert.throws(() => solve(1,"asd"), new TypeError(WRONG_FUNCTION_PARAMS));
	});
});
