"use strict";

const MATH_EXPRESSION_VARIABLE = 'x';
const MATH_MARKING_REGEXP = /^\s*-?[(0-9x]+[(0-9x*+-\/)\s]*$/;

function solve(expression, variable){
    const mathExpression = String(expression);
    if(mathExpression && mathExpression.match(MATH_MARKING_REGEXP)){
        return eval(mathExpression.replaceAll(MATH_EXPRESSION_VARIABLE, variable));
    }
    return null;
}