'use strict';

QUnit.module('Тестируем функцию get', function () {
    QUnit.test('get работает правильно c объектами с существующими свойствами', function (assert) {
        const object = {
            foo: 'bar',
            deep: {
                hested: {
                    field: 'baz'
                }
            }
        };

        assert.strictEqual(get(object, '.foo'), object.foo);
        assert.strictEqual(get(object, '.deep.hested.field'), object.deep.hested.field);

        assert.deepEqual(get(object, '.deep.hested'), object.deep.hested);
        assert.deepEqual(get(object, '.deep'), object.deep);
        assert.deepEqual(get(object, '.'), object);
    });

    QUnit.test('get работает правильно c массивами', function (assert) {
        const object = {
            foo: 'bar',
            baz: [1, 2, 3],
            deep: [
                {foobar: '42'}
            ]
        };

        assert.strictEqual(get(object, '.foo.0'), object.foo[0]);
        assert.strictEqual(get(object, '.foo.length'), object.foo.length);
        assert.strictEqual(get(object, '.baz.0'), object.baz[0]);
        assert.strictEqual(get(object, '.baz.length'), object.baz.length);
        assert.strictEqual(get(object, '.deep.0.foobar'), object.deep[0].foobar);
    });

    QUnit.test('get работает правильно c объектами без свойств', function (assert) {
        const object = {
            foo: {
                bar: 42
            }
        };

        assert.strictEqual(get(object, '.foobar'), undefined);
        assert.strictEqual(get(object, '.foo.baz'), undefined);
        assert.strictEqual(get(object, '.baz.0'), undefined);
        assert.strictEqual(get(object, '.baz.length'), undefined);
        assert.strictEqual(get(object, '.0.1.2'), undefined);
    });

    QUnit.test('get адекватно работает с пустыми объектами', function (assert) {
        const object = {};

        assert.strictEqual(get(object, '.'), object);
        assert.strictEqual(get(object, '.abc'), undefined);
        assert.strictEqual(get(object, '.0'), undefined);
        assert.strictEqual(get(object, '.foo.bar'), undefined);
        assert.strictEqual(get(object, '.foo.0'), undefined);
    });

    QUnit.test('get адекватно работает с методами', function (assert) {
        const object = {
            foo: 'bar',
            func() {
                alert(5);
            },
            deep: {
                bar: 'field',
                func() {
                    alert(10);
                }
            }
        };

        assert.strictEqual(get(object, '.'), object);
        assert.strictEqual(get(object, '.abc'), undefined);
        assert.strictEqual(get(object, '.foo'), object.foo);
        assert.strictEqual(get(object, '.func'), object.func);
        assert.strictEqual(get(object, '.deep.func'), object.deep.func);
    });

    QUnit.test('get принимает только object в качестве первого аргумента', function (assert) {
        let object = 5;

        assert.throws(() => get(object, '.'), new Error('Incorrect type'));

        object = 'string'

        assert.throws(() => get(object, '.foo'), new Error('Incorrect type'));
    });

    QUnit.test('get принимает только string в качестве второго аргумента', function (assert) {
        const object = {
            foo: 'bar'
        };

        assert.throws(() => get(object, 5), new Error('Incorrect type'));
        assert.throws(() => get(object, []), new Error('Incorrect type'));
        assert.throws(() => get(object, {}), new Error('Incorrect type'));
    });
});
