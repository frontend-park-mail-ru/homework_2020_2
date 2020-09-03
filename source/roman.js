const ROMAN_TO_ARABIC = {'M' : 1000,
                        'CM': 900,
                        'D': 500,
                        'CD' : 400,
                        'C': 100,
                        'XC': 90,
                        'L': 50,
                        'XL': 40,
                        'X': 10,
                        'IX': 9,
                        'V': 5,
                        'IV': 4,
                        'I' : 1};

/** @description Перевод числа из арабской системы в римскую
 * @param {num} Римское число, которое необходимо перевести
 * @return {res} Число(строка), в римской системе
 */
const convertToRoman = (num) => {
    let res = '';
    let number = num;

    for (let [key, value] of Object.entries(ROMAN_TO_ARABIC)) {
        while (number >= value) {
            res += key;
            number -= value;
        }
    }
    return res;
};

/** @description Перевод число из римской системы в арабскую
 * @param {inputText} Римское число, представленное в виде строки
 * @return {res} Число, переведенное в арабскую систему
 */
const convertToArabic = (inputText) =>
    inputText.toUpperCase().split('').reduce( (res, tempKey, count, arrOfNumber) => {
        let temp = ROMAN_TO_ARABIC[tempKey];
        let next;

        if (ROMAN_TO_ARABIC[arrOfNumber[count + 1]]) {
            next = ROMAN_TO_ARABIC[arrOfNumber[count + 1]];
        }

        return res + (temp < next ? -temp : temp);
    }, 0);

/** @description Выбор нужной функции для перевода числа в зависимости от входного параметра
 * @param {input} Число, которое необходимо певести
 * @return Число, ереведенное в нужную систему, или ошибка
 */
const roman = (input) => {
    try {
        if (input) {
            input.toString();
        }
        if (!/^[0-9]+$/.test(input) && !/^[IiVvXxLlCcDdMm]+$/.test(input)) {
            throw new Error("некорректное число");
        }
    } catch (e) {
        return e;
    }

    try {
        if (input >= 4000 || input <= 0) {
            throw new Error("некорректное число");
        }

        let str = input.toString().toUpperCase();
        if (/^[IVXLCDM]+$/.test(str)){
            return convertToArabic(input.toString().toUpperCase());
        } else {
            return convertToRoman(input);
        }
    } catch (e) {
        return e;
    }
};
