'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AAAAAAAAAAAAA'), 'A9A4');
		assert.strictEqual(rle('AAAAAAAAAA'), 'A9A');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('rle работает правильно на пустом входе', function (assert) {
		assert.strictEqual(rle(''), '');
        });

	QUnit.test('rle работает правильно на строке из одного символа', function (assert) {
		assert.strictEqual(rle('AAAA'), 'A4');
		assert.strictEqual(rle('a'), 'a');
	});

	QUnit.test('rle работает только на A-Z и a-z', function (assert) {
		assert.throws(() => rle('6h'), new Error('Некорректный тип входных данных'));
		assert.throws(() => rle('444445'), new Error('Некорректный тип входных данных'));
		assert.throws(() => rle('...-;'), new Error('Некорректный тип входных данных'));
	});
});
