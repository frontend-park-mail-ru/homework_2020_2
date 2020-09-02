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
    try {
        if (typeof (text) != "string") {
            throw new SyntaxError("wrong type");
        }

        let arrayText = text.split(' ');

        const collator = new Intl.Collator();

        arrayText = arrayText.map((word) => word.toLowerCase().split('').sort((a, b) => collator.compare(a, b)).join(''));

        arrayText.sort((a, b) => collator.compare(a, b))

        arrayText = arrayText.map((word) => word[0].toUpperCase() + word.substring(1));

        return arrayText.join(' ');
    } catch (e) {
        if(e.name == "SyntaxError") {
            return "Error wrong type of passed value";
        } else {
            throw e;
        }
    }
}
