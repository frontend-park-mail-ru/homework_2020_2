'use strict'

let sort = (str) => {
    if (!str) {
        return ''
    }

    let words = str.replace(/ +/g, ' ').trim().split(' ')

    let collator = new Intl.Collator();

    words = words.map((element) => {
        element = element.split('').sort((a, b) => {
            return collator.compare(a, b)
        }).join('').toLowerCase().split('')

        element[0] = element[0].toUpperCase()
        return element.join('')
    });

    return words.sort().join(' ')
}
