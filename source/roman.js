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


function convertToRoman(num) {
    let res = '';

    for (let entire of Object.entries(ROMAN_TO_ARABIC)) {
        while (num >= entire[1]) {
            res += entire[0];
            num -= entire[1];
        }
    }

    return res;
}


function convertToArabic(inputText) {
    return inputText.toUpperCase().split('').reduce( (res, a, i, aa) => {
        let temp = ROMAN_TO_ARABIC[a];
        let next;

        if ( ROMAN_TO_ARABIC[ aa[i+1] ] ) {
            next = ROMAN_TO_ARABIC[aa[i + 1]];
        }

        return res + (temp < next ? -temp : temp);
    }, 0);
}


function roman(input)
{
    let intInput = +input;
    input = '' + input;

    if (input.toUpperCase().match(/^[IVXLCDM]+$/)) {
        return convertToArabic(input);
    } else if (Number.isInteger(intInput) && intInput > 0 && intInput < 4000) {
        return convertToRoman(intInput);
    } else {
        return "некорректное значение";
    }
}