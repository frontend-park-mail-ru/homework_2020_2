'use strict';
 
QUnit.module('Проверка работы функции filter', function () {
    QUnit.test('filter экранирует символы в обычном тексте', function (assert) {
        const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';
 
        const output = filter(input, [ 'strong', 'em' ]);
 
        const expected = '- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...';
 
        assert.strictEqual(output, expected);
    });
 
    QUnit.test('filter не экранирует валидные html-тэги', function (assert) {
        const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';
 
        const output = filter(input, [ 'strong', 'em' ]);
 
        const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!';
 
        assert.strictEqual(output, expected);
    });
 
    QUnit.test('filter экранирует XSS', function (assert) {
        assert.strictEqual(filter(`<script>alert('1');</script>`, [ 'strong', 'em' ]), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
        assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, [ 'strong', 'em' ]), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
    });
 
    QUnit.test('filter экранирует последовательность левых или правых скобок, а так же пустые теги', function (assert) {
        const input = '<<<><script> здесь находится последовательность символов и &, ", дальше -- пустые теги <> <<>></script>';
 
        const output = filter(input, ['script']);
 
        const expected = '&lt;&lt;&lt;&gt;<script> здесь находится последовательность символов и &amp;, &quot;, дальше -- пустые теги &lt;&gt; &lt;&lt;&gt;&gt;</script>';
 
        assert.strictEqual(output, expected);
    });
 
    QUnit.test('filter выдает исключение при неправильном аргументе слева', function (assert) {
        const input = 123456;
 
        assert.throws(() => filter(input, [ 'script', 'xss' ]), /string/);  
 
    });
 
    QUnit.test('filter выдает исключение, если справа не массив', function (assert) {
        const input = 'какая-то строка';
 
        assert.throws(() => filter(input, 123456), /Array/);    
    });
 
    QUnit.test('filter выдает исключение, если в массиве содержатся не только строки', function (assert) {
        const input = 'какая-то строка';
 
        assert.throws(() => filter(input, [ 'script', 2, 3, 'doctype' ]), /strings/);
    });
 
});
