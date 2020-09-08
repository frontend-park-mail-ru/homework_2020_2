'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
		assert.strictEqual(euclid(...[...temp, ...temp, ...temp, ...temp, ...temp]), euclid(...temp));
	});

	QUnit.test('Функция должна правильно работать с нулевыми аргументами', function (assert) {
		assert.strictEqual(euclid(0, 10, 20), 10, 'euclid(0, 10, 20) === 10');
		assert.strictEqual(euclid(0, 666), 666, 'euclid(0, 666) === 666');
		assert.strictEqual(euclid(0, 0, 0), Infinity, 'euclid(0, 0, 0) === Infinity');
	})

	QUnit.test('Функция должна корректно обрабатывать невалидный ввод', function (assert) {
		const singleInvalidArgument = [{}, null, undefined, 'some string', -1, 1.11];
		const manyArgumentsWithInvalid = [[], [10, 20, 'some string', 30], [10, 20, -30, 40], [10, Infinity, 20]];
		const expectedExceptionsForSingleArg = [
			inputArgFormatException(singleInvalidArgument[0]),
			inputArgFormatException(singleInvalidArgument[1]),
			inputArgFormatException(singleInvalidArgument[2]),
			inputArgFormatException(singleInvalidArgument[3]),
			inputArgFormatException(singleInvalidArgument[4]),
			inputArgFormatException(singleInvalidArgument[5]),
		];
		const expectedExceptionsForManyArgsWithInvalid = [
			inputArgFormatException(0, 'Empty sequence: length = '),
			inputArgFormatException('some string'),
			inputArgFormatException(-30),
			inputArgFormatException(Infinity),
		];

		expectedExceptionsForSingleArg.forEach((except, i, expectedExceptionsForSingleArg) => {
			assert.throws(
				() => euclid(singleInvalidArgument[i]),
				except,
				"Check for single invalid argument exception raising..."
			);
		});

		expectedExceptionsForManyArgsWithInvalid.forEach((except, i, expectedExceptionsForManyArgsWithInvalid) => {
			assert.throws(
				() => euclid(...manyArgumentsWithInvalid[i]),
				except,
				"Check for invalid argument exception raising in list..."
			);
		});
	});

});
