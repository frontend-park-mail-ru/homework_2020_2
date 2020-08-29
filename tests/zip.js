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

	QUnit.test('Мой тест#1', function(assert) {
		const obj1 = {
			name: 'Hello World',
			last_name: 'How are you, Hello World?',
			age: 2002,
			ip: "192.168.1000.1000",
		};
		assert.deepEqual(zip(obj1), obj1);

		const obj2 = {
			name: 'Ne Hello World',
			last_name: 'How are you, Hello World?',
			age: 2002,
			ip: "192.168.1000.1000",
		};
		assert.deepEqual(zip({name: "Ne Hello World"}, obj1), obj2);
		assert.deepEqual(zip(obj1, {name: "Ne Hello World"}), obj1);
	})

	QUnit.test('Проверка корректности работы с перечисляемыми и не перечисляемыми свойствами.', function(assert) {
		const obj1 = {};
		Object.defineProperty(obj1, 'name', {
			value: 'Hello World',
			enumerable: false
		});
		assert.deepEqual(zip(obj1), {}, 'Должен вернуться пустой объект т.к. копируются только перечисляемые свойства.');

		const obj2 = {};
		Object.defineProperty(obj2, 'name', {
			value: 'Hello World',
			enumerable: true
		});
		assert.deepEqual(zip(obj2), obj2, 'Должен вернуться не пустой объект т.к. копируются только перечисляемые свойства.');
	})
});
