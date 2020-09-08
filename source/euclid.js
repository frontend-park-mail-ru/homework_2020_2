'use strict';

function gcd(a, b) {
    while(a != 0 && b != 0) {
		if (a > b)
			a = a % b;
		else
			b = b % a;
	}
    return Math.max(a, b);
}

function euclid() {
    if (arguments.length < 2) return arguments[0];
    let res = gcd(arguments[0], arguments[1]);
    for (let i = 2; i < arguments.length; i++)
        res = gcd(res, arguments[i]);
    return res;
}

