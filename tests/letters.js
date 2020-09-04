'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');
		assert.strictEqual(letters('абвгд еёжз'), 'абвгд еёжз');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');
		assert.strictEqual(letters('абвгд еёжз', true), 'абвгд еёжз');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
		assert.strictEqual(letters('абвгд еёжз', false), 'абвгд еёжз');
	});

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
		assert.strictEqual(letters('ййййййййй'), '');
	});
	
	QUnit.test('Удаляет повторяющиеся буквы в отдельном слове', function (assert) {
		assert.strictEqual(letters('аппппр'), 'ар');
		assert.strictEqual(letters('ghhhh'), 'g');
		assert.strictEqual(letters('/...../'), '');
		assert.strictEqual(letters('...ю...'), 'ю');
		assert.strictEqual(letters('   '), '');
	});
	
	QUnit.test('Удаляет идущие подряд буквы, при этом оставляет первую букву', function (assert) {
		assert.strictEqual(letters('111', true), '1');
		assert.strictEqual(letters('www', true), 'w');
		assert.strictEqual(letters('...', true), '.');
		assert.strictEqual(letters('   ', true), ' ');
	});

	QUnit.test('Удаляет идущие подряд буквы, при этом оставляет последнюю букву', function (assert) {
		assert.strictEqual(letters('111', false), '1');
		assert.strictEqual(letters('www', false), 'w');
		assert.strictEqual(letters('...', false), '.');
		assert.strictEqual(letters('   ', false), ' ');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
		assert.strictEqual(letters('ammmmmmm', true), 'am');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
		assert.strictEqual(letters('ammmmmmm', true), 'am');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх');
		assert.strictEqual(letters('аааааааааа ааааааааа аааа'), '');
		assert.strictEqual(letters('лодке собираются акулы'), 'дебирютяуы');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');
		assert.strictEqual(letters('аааааааааа ааааааааа аааа', true), 'а ');
		assert.strictEqual(letters('лодке собираются акулы', true), 'лодке сбираютяуы');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
		assert.strictEqual(letters('аааааааааа ааааааааа аааа', false), ' а');
		assert.strictEqual(letters('лодке собираются акулы', false), 'деобирются акулы');
	});

	QUnit.test( "Исключения", function( assert ) {
		assert.throws(() => letters(undefined), TypeError("Первый аргумент не валиден"));
		assert.throws(() => letters(5), TypeError("Первый аргумент должен быть строкой"));
		assert.throws(() => letters('string','dfgd'), TypeError("Второй аргумент должен иметь тип bool или не должен быть передан"));
		assert.throws(() => letters('string',5), TypeError("Второй аргумент должен иметь тип bool или не должен быть передан"));
	});
});

