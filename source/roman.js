let roman_arabic = ([{char : 'M', value: 1000}, {char :'CM',value: 900},{char :'D',value: 500},{char :'CD',value: 400},
                                    {char :'C',value: 100}, {char :'XC',value: 90}, {char :'L',value: 50}, {char :'XL',value: 40},
                                    {char :'X',value: 10}, {char :'IX',value: 9}, {char :'V',value: 5}, {char :'IV',value: 4}, {char :'I',value: 1}]);


function convertToRoman(num) {
   return roman_arabic.reduce((res, curValue) => {
       while (num >= curValue.value) {
           res += curValue.char;
           num -= curValue.value;
       }
       return res;
   }, '');
}

function convertToArabic(inputText) {

    return inputText.toUpperCase().split('').reduce((res, a, i, aa) => {
        let temp = roman_arabic.find(item => item.char === a).value;
        let next = roman_arabic.find(item => item.char === aa[i+1]);
        if (next)
            next = next.value;
        return res + (temp < next ? -temp: temp);
        }, 0);
}


function roman(input)
{
    if (input.toUpperCase().match(/^[IVXLCDM]+$/))
    {
        return convertToArabic(input);
    }
    else if (Number.isInteger(+input) && +input > 0 && +input < 4000)
    {
        return convertToRoman(input);
    }
    else
        return null;
}

