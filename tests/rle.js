'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('rle работает правильно на пустом входе', function (assert) {
		assert.strictEqual(rle(''), '');
        });

	QUnit.test('rle работает правильно на строке из одного символа', function (assert) {
		assert.strictEqual(rle('AAAA'), 'A4');
		assert.strictEqual(rle('A'), 'A');
	});

	QUnit.test('rle работает правильно не только на A-Z', function (assert) {
		assert.strictEqual(rle('dhnh'), 'dhnh');
		assert.strictEqual(rle('ggggtttt'), 'g4t4');
		assert.strictEqual(rle('444445'), '455');
		assert.strictEqual(rle('...-;'), '.3-;');
	});
});
