'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42});

		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42
			}
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42
		};

		assert.deepEqual(plainify(nested1), plain1);

		const nested2 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42
						}
					}
				}
			}
		};

		const plain2 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42
		};

		assert.deepEqual(plainify(nested2), plain2);
	});

	QUnit.test('Функция принимает на вход только Object', function (assert) {
		assert.deepEqual(plainify({}), {});
		assert.deepEqual(plainify(undefined), {});
		assert.deepEqual(plainify(null), {});
		assert.deepEqual(plainify(NaN), {});
		assert.deepEqual(plainify(new Date()), {});
		assert.deepEqual(plainify('string'), {});
		assert.deepEqual(plainify(1), {});
	});

	QUnit.test('Функция нормально работает с нестандартными данными', function (assert) {
		assert.deepEqual(plainify({ id: undefined }), { id: undefined });
		assert.deepEqual(plainify({ pk: null }), { pk: null });
	});
});
