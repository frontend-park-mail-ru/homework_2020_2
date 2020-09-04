'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});

	QUnit.test('Неккоректный ввод', function (assert) {
		assert.strictEqual(tree(''), null);
		assert.strictEqual(tree({}), null);
		assert.strictEqual(tree(Infinity), null);
		assert.strictEqual(tree(true), null);
		assert.strictEqual(tree('smth_strng'), null);
		assert.strictEqual(tree('12%43'), null);
		assert.strictEqual(tree(undefined), null);
		assert.strictEqual(tree(null), null);
	});

	QUnit.test('Ёлочка высотой 9', function (assert) {
		const expected =
			'       *       \n' +
			'      ***      \n' +
			'     *****     \n' +
			'    *******    \n' +
			'   *********   \n' +
			'  ***********  \n' +
			' ************* \n' +
			'***************\n' +
			'       |       \n';
		assert.strictEqual(tree(9), expected);
		assert.strictEqual(tree('9'), expected);
	});

	QUnit.test('Ёлочка с высотой нецелым числом', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8.3), expected);
		assert.strictEqual(tree(8.7), expected);
	});

	QUnit.test('Царь елочка', function (assert) {
		const expected =
			'          *          \n' +
			'         ***         \n' +
			'        *****        \n' +
			'       *******       \n' +
			'      *********      \n' +
			'     ***********     \n' +
			'    *************    \n' +
			'   ***************   \n' +
			'  *****************  \n' +
			' ******************* \n' +
			'*********************\n' +
			'          |          \n';
		assert.strictEqual(tree(12), expected);
		assert.strictEqual(tree('12'), expected);
	});

});
