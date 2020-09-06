'use strict';

QUnit.module('Тестируем функцию plain', function () {
	QUnit.test('Работает с единственным элементом', function (assert) {
		assert.deepEqual(plain([]), [], 'Работает с пустым массивом');
		assert.deepEqual(plain([ 42 ]), [ 42 ], 'Работает с массивом из одного элемента');
		assert.deepEqual(plain([ 1, 2, 3, 4 ]), [ 1, 2, 3, 4 ], 'Сохраняет порядок элементов');
	});

	QUnit.test('Работает с единственным массивом', function (assert) {
		assert.deepEqual(plain([ [] ]), []);
		assert.deepEqual(plain([ [ 42 ] ]), [ 42 ]);
		assert.deepEqual(plain([ [ 1, 2, 3, 4 ] ]), [ 1, 2, 3, 4 ]);
	});

	QUnit.test('Работает со смешанными значениями', function (assert) {
		assert.deepEqual(plain([ [], 42 ]), [ 42 ]);
		assert.deepEqual(plain([ [ 42 ], 0 ]), [ 42, 0 ]);
		assert.deepEqual(plain([ [ 1, 2, 3, 4 ], 5, 6, 7, 8 ]), [ 1, 2, 3, 4, 5, 6, 7, 8 ]);
	});

	QUnit.test('Работает с несколькими массивами', function (assert) {
		assert.deepEqual(plain([ [], [] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ 42 ], [ 42 ] ]), [ 42, 42 ]);
		assert.deepEqual(plain([ [ 42, 42 ], [ 42 ] ]), [ 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ], [ 4, 5, 6 ] ]), [ 1, 2, 3, 4, 5, 6 ]);
	});

	QUnit.test('Работает с вложенными массивами', function (assert) {
		assert.deepEqual(plain([ [], [ [], [], [] ] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ 42 ], [ [ 42 ], [], [ 42 ] ], [ 42 ] ]), [ 42, 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 42, 42 ], [ 42, [ 42, [ 42, 42 ], 42 ] ] ]), [ 42, 42, 42, 42, 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ], [ 4, 5, [ 6, 7, 8, [ 9 ] ], 10 ], 11 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
	});

	QUnit.test('Работает с элементами разных типов', function (assert) {
		assert.deepEqual(plain([ [ 'abcde' ], [ [ 'f' ], [ null, false ], [ NaN, NaN ], NaN ], -Infinity ]), [ 'abcde', 'f', null, false, NaN, NaN, NaN, -Infinity ]);
	});

	QUnit.test('Работает с массивами отрицательных элементов', function (assert) {
		assert.deepEqual(plain([ [], [ [], [], [] ] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ -1 ], [ [ -2 ], [ -3, -4 ], [ -5, -6 ], -7 ], -8 ]), [ -1, -2, -3, -4, -5, -6, -7, -8]);
		assert.deepEqual(plain([ [ NaN ], [ -Infinity, -NaN], [-10], [ -1, [ -2], Infinity]]), [ NaN, -Infinity, -NaN, -10, -1, -2, Infinity]);
	});

	QUnit.test('Работает с кастомными объектами', function (assert) {
		class Test {
			constructor(body) {
				this.body = body;
			}
		}

		let stupidInstance = new Test("test");
		assert.deepEqual(plain([ [ stupidInstance ], [ [ stupidInstance ], [ stupidInstance, stupidInstance ], [ stupidInstance, stupidInstance ], stupidInstance ], stupidInstance ]),
		[ stupidInstance, stupidInstance, stupidInstance, stupidInstance, stupidInstance, stupidInstance, stupidInstance, stupidInstance]);

		let anotherInstance = new Test("test_2")
		assert.deepEqual(plain([ [ anotherInstance ], [ -anotherInstance,  [ -stupidInstance ]], [-anotherInstance]]), [ anotherInstance, -anotherInstance, -stupidInstance, -anotherInstance], 
		'Сохраняет порядок элементов');
	});

	QUnit.test('Работа с неверными типами данных', function (assert) {
		assert.deepEqual(plain(1), []);
		assert.deepEqual(plain("string maybe?"), []);
		assert.deepEqual(plain( Nan ), []); 
	});
});
