'use strict';

QUnit.module('Тестируем функцию plainify', function () {

	QUnit.test('Тест isObject', function (assert) {
		assert.deepEqual(isObject({}), true, 'isObject({}) == true');
		assert.deepEqual(isObject(undefined), false, 'isObject(undefined) == false');
		assert.deepEqual(isObject(null), false, 'isObject(null) == false');
		assert.deepEqual(isObject(NaN), false, 'isObject(NaN) == false');
		assert.deepEqual(isObject(new Date()), false, 'isObject(new Date()) == false');
		assert.deepEqual(isObject(1), false, 'isObject(1) == false');
		assert.deepEqual(isObject('string'), false, 'isObject("string") == false');
		assert.deepEqual(isObject([1, 2, 3]), false, 'isObject([1, 2, 3]) == false');
		assert.deepEqual(isObject(String('aaa')), false, 'isObject(String("aaa")) == false');
		assert.deepEqual(isObject(new Map()), false, 'isObject(new Map()) == false');
		assert.deepEqual(isObject(new Set()), false, 'isObject(new Set()) == false');
	});

	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42}, 'result == {\'foo\': \'bar\', \'baz\': 42}');

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

		assert.deepEqual(plainify(nested1), plain1, `result == {\'deep.foo\': \'bar\', \'deep.baz\': 42}`);

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

		assert.deepEqual(plainify(nested2), plain2, 'result == {\'deep.footbar\': 0, ' +
			'\'deep.nested.object.fields.foo\':42, \'deep.nested.object.fields.bar\':42, ' +
			'\'deep.nested.object.fields.baz\':42, }');
	});

	QUnit.test('Функция принимает на вход только Object', function (assert) {
		assert.deepEqual(plainify({id: 1}), {'id': 1}, 'plainify({ id: 1}) = {\'id\': 1}');
		assert.deepEqual(plainify(undefined), {}, 'plainify(undefined) = {}');
		assert.deepEqual(plainify(null), {}, 'plainify(null) = {}');
		assert.deepEqual(plainify(NaN), {}, 'plainify(NaN) = {}');
		assert.deepEqual(plainify(new Date()), {}, 'plainify(new Date()) = {}');
		assert.deepEqual(plainify('string'), {}, 'plainify(\'string\') = {}');
		assert.deepEqual(plainify(1), {}, 'plainify(1) = {}');
	});
});
