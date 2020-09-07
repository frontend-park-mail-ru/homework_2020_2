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

	QUnit.test('Функция правильно работает с вложенными объектами', function (assert) {
		assert.deepEqual(zip({answer: { age: "42" }}, {age: "42"}), {answer: { age: "42" }, age: "42"});

		const obj = {
			answer: {
				 age: {
					 tens: "40", 
					 units: "2"
					} 
				}
		};
		assert.deepEqual(zip(obj, {answer: "42"}), obj);

		let id = Symbol("answer");
		assert.deepEqual(zip({id: { age: {number: "42"} }}, {answer: "42"}), {id: { age: {number: "42"} }, answer: "42"});
	});

	QUnit.test('Функция правильно работает со свойствами, значения которых null или undefined', function (assert) {
		assert.deepEqual(zip({name: undefined, value: null}), {name: undefined, value: null});
		assert.deepEqual(zip({name: undefined, value: "42"}, {name: 'age', value: null}), {name: undefined, value: "42"});
		assert.deepEqual(zip({name: null, value: "42"}, {name: 'age', value: undefined}), {name: null, value: "42"});
	});

	QUnit.test('Некорректный ввод', function (assert) {
		assert.throws(() => zip("age"), TypeError,  'Invalid type');
		assert.throws(() => zip(123), TypeError,  'Invalid type');
		assert.throws(() => zip(new Boolean()), TypeError,  'Invalid type');
		assert.throws(() => zip(null, {}, {age: "42"}), TypeError,  'Invalid type');
	});
});
