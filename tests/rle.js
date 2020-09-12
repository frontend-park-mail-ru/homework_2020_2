'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AAAAAAAAAAAAA'), 'A13');
		assert.strictEqual(rle('AAAAAAAAAA'), 'A10');
		assert.strictEqual(rle('ДЛИННОШЕЕЕ'), 'ДЛИН2ОШЕ3');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('rle работает правильно на пустом входе', function (assert) {
		assert.strictEqual(rle(''), '');
        });

	QUnit.test('rle работает правильно на строке из одного символа', function (assert) {
		assert.strictEqual(rle('AAAA'), 'A4');
		assert.strictEqual(rle('a'), 'a');
	});

	QUnit.test('rle работает на всем кроме цифр', function (assert) {
		assert.throws(() => rle('6h'), new Error('Недопустимые символы в строке'));
		assert.throws(() => rle('444445first'), new Error('Недопустимые символы в строке'));
	});

	QUnit.test('rle работает правильно с некорректным типом входных данных', function (assert) {
		assert.throws(() => rle(null), new Error('Некорректный тип входных данных'));
		assert.throws(() => rle(undefined), new Error('Некорректный тип входных данных'));
		assert.throws(() => rle([5,5]), new Error('Некорректный тип входных данных'));
	});
});
