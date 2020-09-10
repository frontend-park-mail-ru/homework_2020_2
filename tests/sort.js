'use strict';

QUnit.module('Тестируем функцию sort', function () {
    QUnit.test('Функция делает первую букву слова прописной', function (assert) {
        assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
        assert.strictEqual(sort('Бббббб'), 'Бббббб');
        assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
        assert.strictEqual(sort('Rrrrrrrr'), 'Rrrrrrrr');
    });

    QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
        assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
        assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
    });

    QUnit.test('Функция работает с предложениями', function (assert) {
        assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
        assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
    });

    QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
        assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
        assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
        assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
        assert.strictEqual(sort('вбава'), 'Аабвв');
    });

    QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
        assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
        assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
        assert.strictEqual(sort('в б а в а'), 'А А Б В В');
    });

    QUnit.test('Функция правильно обрабатывает некорректные данные', function (assert) {
        assert.throws(() => sort('      '), SyntaxError(`fail syntax: "      "`));
        assert.strictEqual(sort('   s    '), 'S');
        assert.throws(() => sort(''), SyntaxError(`fail syntax: ""`));
        assert.throws(() => sort(Math.random()), TypeError(`fail type: ${typeof Math.random()}`));
    });

    QUnit.test('Функция работает с русским и английским алфовитом одновременно', function (assert) {
        assert.strictEqual(sort('ab аб'), 'Аб Ab');
        assert.strictEqual(sort('космический корабль i love frontend'), 'Абклорь Еиийккмоссч Defnnort Elov I');
    });

    QUnit.test('Функция работает правильно', function (assert) {
        assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
        assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
        assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
        assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
    });
});
