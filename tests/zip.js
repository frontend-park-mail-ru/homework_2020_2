'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};

		const obj4 = {
			prop: false,
			attr: null
		};

		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};

		assert.deepEqual(zip(obj3, obj4), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с одинаковыми именами', function (assert) {
		const obj = {
			count: 0
		};

		assert.deepEqual(zip({count: 0}, {count: 0}, {count: 0}), obj);

		const obj2 = {
			a: 1,
			b: false,
		};
		assert.deepEqual(zip({a: 1}, {a: 1}, {b: false}, {b: false}), obj2);

		const obj3 = {
			value: 31,
			calculation: 123,
		};
		assert.deepEqual(zip({value: 31}, {value: 35}, {value: 31, calculation: 123}), obj3);

		const obj4 = {
			value: 35,
			calculation: 123,
		};
		assert.deepEqual(zip({value: 35}, {value: 35, calculation: 123}), obj4);

		const obj5 = {
			attr: 'value',
			count: 21
		};

		const obj6 = {
			attr: 'value',
			count: 21
		};

		const obj7 = {
			attr: 'value',
			count: 21
		};

		assert.deepEqual(zip(obj5, obj6), obj7);
	});

	QUnit.test('Функция работает без аргументов', function (assert) {
		const obj = {};

		assert.deepEqual(zip(), obj);

		assert.deepEqual(zip(undefined), obj);

		assert.deepEqual(zip(null), obj);

	});
});
