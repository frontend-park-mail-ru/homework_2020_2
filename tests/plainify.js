'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42}, 'Функция нормально работает без без вложености');

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

		assert.deepEqual(plainify(nested1), plain1, `Функция нормально работает с вложенными объектами`);

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

		assert.deepEqual(plainify(nested2), plain2, 'Функция нормально работает с вложенными объектами');
	});

	QUnit.test('Функция принимает на вход только Object', function (assert) {
		assert.deepEqual(plainify({id: 1}), {'id': 1}, 'Функция возвращает plain-объект на передеанный в нее object');
		assert.deepEqual(plainify(undefined), {}, 'Функция возвращает пустой объект на передеанный в нее undefined');
		assert.deepEqual(plainify(null), {}, 'Функция возвращает пустой объект на передеанный в нее null');
		assert.deepEqual(plainify(NaN), {}, 'Функция возвращает пустой объект на передеанный в нее NaN');
		assert.deepEqual(plainify(new Date()), {}, 'Функция возвращает пустой объект на передеанный в Date');
		assert.deepEqual(plainify('string'), {}, 'Функция возвращает пустой объект на передеанный в нее string');
		assert.deepEqual(plainify(1), {}, 'Функция возвращает пустой объект на передеанный в нее number');
	});
});
