'use strict';

const solve = (eq, x) => {
	if (!/^[-+*x0-9() ]+$/.test(eq) || 
			/(\*|\+|-){2,}/.test(eq) ||
			/x *x/.test(eq) ||
			/[x0-9] *[x0-9]/.test(eq)) {
        throw new SyntaxError("Invalid expression syntax");
    }
	if (typeof eq !== "string" || typeof x !== "number" || !Number.isInteger(x)) {
        throw new TypeError("Invalid parameters");
    }
    if (eq.split("(").length != eq.split(")").length) {
        throw new SyntaxError("Invalid braces placement");
    }
	let res = new Function("x", `return ${eq}`)(x)
	if (typeof res !== "number" || !Number.isInteger(res)) {
        throw new SyntaxError("Invalid expression");
	}
	return res;
}
