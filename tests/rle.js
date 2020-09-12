'use strict';

QUnit.module('Тестируем функцию rle', function () {
    QUnit.test('rle работает правильно', function (assert) {
        assert.strictEqual(rle('AAAB'), 'A3B');
        assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
        assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
        try {
            rle(15347)
        } catch (e) {
            assert.strictEqual(e.toString(), 'NOT STRING!');
        }
        try {
            rle('AFHUWFBIASIF15KJHJFD34:ODJDF7')
        } catch (e) {
            assert.strictEqual(e.toString(), 'UNEXPECTED SYMBOL!');
        }
        try {
            rle(null)
        } catch (e) {
            assert.strictEqual(e.toString(), 'NOT STRING!');
        }
        try {
            rle(undefined)
        } catch (e) {
            assert.strictEqual(e.toString(), 'NOT STRING!');
        }
        assert.strictEqual(rle('SSSSOOOEEERROOOAAYYYYYDDDDOEUUUUUWWWWJJJORRUUUUUUUUUUXXXKHHHHHHMMMMMMGGGLLLLLLLJJJJ'), 'S4O3E3R2O3A2Y5D4OEU5W4J3OR2U10X3KH6M6G3L7J4');
    });
});
