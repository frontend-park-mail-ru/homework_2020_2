const ROMAN_TO_ARABIC = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/** @description Перевод числа из арабской системы в римскую
 * @param {number} num - римское число, которое необходимо перевести
 * @return {string} res - число(строка), в римской системе
 */
const convertToRoman = (num) => {
  let res = "";
  let numInp = num;

  for (let [key, value] of Object.entries(ROMAN_TO_ARABIC)) {
    while (numInp >= value) {
      res += key;
      numInp -= value;
    }
  }

  return res;
};

/** @description Перевод числа из римской системы в арабскую
 * @param {string} inputText - римское число, представленное в виде строки
 * @return {number} res - число, переведенное в арабскую систему
 */
const convertToArabic = (inputText) =>
  inputText
    .toUpperCase()
    .split("")
    .reduce((res, tempKey, count, arrOfNumber) => {
      const temp = ROMAN_TO_ARABIC[tempKey];
      let next;

      if (ROMAN_TO_ARABIC[arrOfNumber[count + 1]]) {
        next = ROMAN_TO_ARABIC[arrOfNumber[count + 1]];
      }

      return res + (temp < next ? -temp : temp);
    }, 0);

/** @description Выбор нужной функции для перевода числа в зависимости от входного параметра
 * @param {string|number} input -  число, которое необходимо перевести
 * @return Число, переведенное в нужную систему, или ошибка
 */
const roman = (input) => {
  try {
    input = input.toString();

    if (!/^[IiVvXxLlCcDdMm0-9]+$/.test(input)) {
      throw new Error("некорректное число");
    }

    if (input >= 4000 || input <= 0) {
      throw new Error("некорректное число");
    }

    const str = input.toString().toUpperCase();

    if (/^[IVXLCDM]+$/.test(str)) {
      return convertToArabic(input.toString().toUpperCase());
    } else {
      return convertToRoman(+input);
    }
  } catch (e) {
    return e;
  }
};
