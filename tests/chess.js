'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

	QUnit.test('Шахматной доски отрицательного размера не бывает', function (assert) {
		assert.strictEqual(chess(-1), null);
		assert.strictEqual(chess('-1'), null);
	});

	QUnit.test('Шахматной доски нулевого размера не бывает', function (assert) {
		assert.strictEqual(chess(0), null);
		assert.strictEqual(chess('0'), null);
	});

	QUnit.test('Шахматной доски размера Inf на Inf не бывает', function (assert) {
		const expected = null
		assert.strictEqual(chess(Infinity), expected);
		assert.strictEqual(chess('Infinity'), expected);
	});

	QUnit.test('Шахматной доски размера null на null не бывает', function (assert) {
		const expected = null
		assert.strictEqual(chess(null), expected);
		assert.strictEqual(chess('null'), expected);
	});

	QUnit.test('Шахматной доски размера undefined на undefined не бывает', function (assert) {
		const expected = null
		assert.strictEqual(chess(undefined), expected);
		assert.strictEqual(chess('undefined'), expected);
	});

	QUnit.test('Шахматной доски размера abc на abc не бывает', function (assert) {
		const expected = null
		assert.strictEqual(chess('abc'), expected);
	});

	QUnit.test('Шахматная доска 10 на 10', function (assert) {
		const expected =
			'* * * * * \n' +
			' * * * * *\n' +
			'* * * * * \n' +
			' * * * * *\n' +
			'* * * * * \n' +
			' * * * * *\n' +
			'* * * * * \n' +
			' * * * * *\n' +
			'* * * * * \n' +
			' * * * * *\n';
		assert.strictEqual(chess(10), expected);
		assert.strictEqual(chess('10'), expected);
	});

	QUnit.test('Шахматная доска 11 на 11', function (assert) {
		const expected =
			'* * * * * *\n' +
			' * * * * * \n' +
			'* * * * * *\n' +
			' * * * * * \n' +
			'* * * * * *\n' +
			' * * * * * \n' +
			'* * * * * *\n' +
			' * * * * * \n' +
			'* * * * * *\n' +
			' * * * * * \n' +
			'* * * * * *\n';
		assert.strictEqual(chess(11), expected);
		assert.strictEqual(chess('11'), expected);
	});

});
