'use strict';

/**
 * Возвращает строку text, в которой сначала будут отсортированны буквы в словах по алфавиту,
 * а позже отсортированны по алфивиту и сами слова.
 * Первая буква каждого слова станет прописной, остальные строчными
 *
 * @param {string} text Подаваемая на вход строка.
 * @return {string} text, Преобразованная строка.
 */
const sort = text => {
    if (typeof (text) !== "string") {
        throw new SyntaxError("incorrect type entered");
    }

    const collator = new Intl.Collator();

    const charcompare = (a, b) => collator.compare(a, b);

    let arrayText = text.split(' ');

    arrayText = arrayText.map((word) => word.toLowerCase().split('')
                         .sort((a, b) => charcompare(a, b)).join(''));

    arrayText.sort((a, b) => charcompare(a, b))

    arrayText = arrayText.map((word) => word[0].toUpperCase() + word.substring(1));

    return arrayText.join(' ');
}
