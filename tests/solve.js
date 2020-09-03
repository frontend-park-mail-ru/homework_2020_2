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
		assert.strictEqual(solve('-1 - 2 -3 +4', 1), -2);
		assert.strictEqual(solve('   1 -  2  -3 + 4', 1), 0);
	});

	QUnit.test('solve возвращает корректный ответ при неверном выражении', function (assert){
		assert.strictEqual(solve('abcx', 1), null);
		assert.strictEqual(solve('x + 5a + 3b + x^2', 1), null);
		assert.strictEqual(solve('x + x^2', 1), null);
		assert.strictEqual(solve('4 + 3 + 2 + null', 1), null);
		assert.strictEqual(solve('a + b + c', 1), null);
	})

});
