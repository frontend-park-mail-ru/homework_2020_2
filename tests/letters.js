'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
	});

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
		assert.strictEqual(letters('azzzb'), 'ab');
		assert.strictEqual(letters('ddd12'), '12');
		assert.strictEqual(letters('dr. wwww'), 'dr. ');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
		assert.strictEqual(letters('12111', true), '12');
		assert.strictEqual(letters('123242222', true), '1234');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
		assert.strictEqual(letters('111121', false), '21');
		assert.strictEqual(letters('141113121', false), '4321');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
	});

	QUnit.test('Проверяет поведение программы при некорректных входных параметрах', function (assert) {
		assert.throws(() => letters(undefined), new TypeError('The first argument must be a string'));
		assert.throws(() => letters(1), new TypeError('The first argument must be a string'));
		assert.throws(() => letters(false), new TypeError('The first argument must be a string'));
		assert.throws(() => letters({}), new TypeError('The first argument must be a string'));
		assert.throws(() => letters(new Map()), new TypeError('The first argument must be a string'));
		assert.throws(() => letters(new Set(), false), new TypeError('The first argument must be a string'));
		assert.throws(() => letters(new String(), true), new TypeError('The first argument must be a string'));
	});
});
