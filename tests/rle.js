'use strict';

QUnit.module('Тестируем функцию rle', function () {
    QUnit.test('rle работает правильно', function (assert) {
        assert.strictEqual(rle('AAAB'), 'A3B');
        assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
        assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
        assert.strictEqual(rle('ABCDEFG'), 'ABCDEFG');
        assert.strictEqual(rle(''), '');
    });
    QUnit.test('rle корректно отрабатывает при некорректном аргументе', function (assert) {
        assert.strictEqual(rle(null), null);
        assert.strictEqual(rle(undefined), undefined);
        assert.deepEqual(rle(NaN), NaN);
        assert.deepEqual(rle({}), {});
        const test = {
            'hello': 'world'
        };
        assert.strictEqual(rle(test), test);
    });
});
