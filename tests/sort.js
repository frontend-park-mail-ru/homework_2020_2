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

    QUnit.test('Функция работает правильно', function (assert) {
        assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
        assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
        assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
        assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
    });

    QUnit.test('Функция работает правильно с большим текстом', function (assert) {
        assert.strictEqual(sort('Vix paulo sanctus scripserit ex, te iriure insolens voluptatum qui.' +
            'Vel in dicant cetero phaedrum, usu populo interesset cu, eum ea facer nostrum pericula. ' +
            'Per cu iracundia splendide. Ius dicat feugiat no, vix cu modo dicat principes. Mandamus abhorreant' +
            'deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui.\n' +
            'Per in illud petentium iudicabit, integre sententiae pro no. An nam debet instructior, commodo ' +
            'mediocrem id cum. Per cu iracundia splendide. Vel in dicant cetero phaedrum, usu populo interesset cu,' +
            'eum ea facer nostrum pericula.\n' +
            'Solum vituperata definitiones te vis, vis alia falli doming ea. Sale liber et vel. Vel in dicant cetero ' +
            'phaedrum, usu populo interesset cu, eum ea facer nostrum pericula. Lorem ipsum dolor sit amet, an eos ' +
            'lorem ancillae expetenda, vim et utamur quaestio.'),

            'Аамм Алмы Амру\n.aceillmoprsuu \n.eipqru ,abcdiiitu ,adeeenptx ,adehmpru ,adehmpru ,adehmpru ,aemt ,at' +
            ',at ,ciinorrsttu ,cu ,cu ,cu ,ex ,isv ,no .aceilpru .aceilpru .ae .aeioqstu .ceiinpprs .cmu .ddeeilnps ' +
            '.ddeeilnps .elv .iqu .no Aabehnorrt Aacdiinru Aacdiinru Aaceilln Aadmmnsu Aaeiprttuv Aail Acdint Acdint ' +
            'Acdint Acdit Acdit Acefr Acefr Acefr Acnsstu Ae Ae Ae Aeeeinnstt Aefgitu Aehinosstt Aels Aem Aem Afill' +
            ' Almopttuuv Alopu Amn Amrtuu An An Anpttu Bdeet Beilr Cdeeimmor Cdmmooo Ceeort Ceeort Ceeort Ceiiprrsst' +
            ' Cu Cu Cu Deeeirsssu Deefiiinnost Deenrstu Dgimno Di Dillu Dloor Dmoo Eeeinrsstt Eeeinrsstt Eeeinrsstt ' +
            'Eeeipqrrssu Eeginrt Eeimnpttu Efisstu Eiirru Eilnnoss Eilt Elmor Elmor Elv Elv Elv Emu Emu Emu Eos Epr ' +
            'Epr Et Et Et Et Impsu Imv In In In In In Ist Isu Isv Ivx Ivx Looppu Looppu Looppu Mnorstu Mnorstu ' +
            'Mnorstu Opr Suu Suu Suu');
    });
});
