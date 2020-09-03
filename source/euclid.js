function isValidNumber(num) {
	return typeof num === 'number' && !isNaN(num) && num > 0;
}

function two_nmbs_gcd(a, b) {
    while (a && b)
        a > b ? a %= b : (b %= a)
    return a + b
}

function input_checker(numbers) {
     if (!numbers)
        return null
    let length = numbers.length
    if (!length)
        return null
    for (let i = 0; i < length; ++i)
        if (!isValidNumber(numbers[i]))
            return null
    return length
}

function euclid(...numbers) {
    let length = input_checker(numbers)
    if (!length)
        return null
    let gcd_temp = numbers[0]
    for (let i = 0; i < length - 1; ++i)
        gcd_temp = two_nmbs_gcd(gcd_temp, numbers[i + 1])
    return gcd_temp
}
