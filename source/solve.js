'use strict';

const solve = (eq, x) => {
	if (!/^[-+*x0-9() ]+$/.test(eq) || 
		/(\*|\+|-){2,}/.test(eq) ||
		/x *x/.test(eq) ||
		/[x0-9] *[x0-9]/.test(eq)) {
        throw new SyntaxError("Invalid expression");
    }
	if (typeof eq !== "string" || typeof x !== "number") {
        throw new TypeError("Invalid parameters");
    }
    if (eq.split("(").length != eq.split(")").length) {
        throw new SyntaxError("Invalid braces placement");
    }
	let res = new Function("x", `return ${eq}`)(x)
	if (res === undefined) {
        throw new SyntaxError("Invalid expression");
	}
	return res;
}
