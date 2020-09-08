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

	QUnit.test('filter не экранирует валидные html-тэги, но экранирует символы', function (assert) {
		const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4! & 4 > 3';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4! &amp; 4 &gt; 3';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter экранирует XSS', function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`, [ 'strong', 'em' ]), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, [ 'strong', 'em' ]), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
	});

	QUnit.test('filter экранирует невалидные html-теги', function(assert) {
		const input = `<html> <head> <h1>Head</h1> </head> <body>Body</body> </html>`;

		const output = filter(input, ['head', 'body' ]);

		const expected = `&lt;html&gt; <head> &lt;h1&gt;Head&lt;/h1&gt; </head> <body>Body</body> &lt;/html&gt;`;
		
		assert.strictEqual(output, expected);
	});

	QUnit.test('Передан пустой массив', function(assert) {
		const input = `<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!`;

		const output = filter(input, []);

		const expected = `&lt;strong&gt;Hello, &lt;em&gt;World!&lt;/em&gt;&lt;/strong&gt; 1 + 2 &lt; 4!`;
		
		assert.strictEqual(output, expected);		
	});

	QUnit.test('input пустой', function(assert) {
		const input = '';
		
		const tagsArray = [`strong`, `em`];

		const output = filter(input, tagsArray);
		
		const expected = '';

		assert.strictEqual(output, expected);
	});

	QUnit.test('В input число', function(assert) {
		const input = 5;
		
		const tagsArray = [`strong`, `em`];

		assert.throws(
			function () { filter(input, tagsArray); },
			'Error thrown'
		);
	});

});
