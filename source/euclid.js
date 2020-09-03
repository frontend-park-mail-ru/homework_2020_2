'use strict';

 /**
 * Validate input data.
 * @function
 * @param {number} arg - Input number.
 * @throws {SyntaxError}
 * @return {number} - Positive number
 */

const validate = (arg) => {
    if(Number.isInteger(arg) && arg > 0 ){
        return arg;
    }

    throw new SyntaxError('validation error')
 } 

 /**
 * Finds NOD using euclid algorithm.
 * @function
 * @param {...numbers} args - Input numbers.
 * @throws {SyntaxError}
 * @return {number} - NOD
 */

const euclid = (... args) => {
    let res;

    try{
        res = validate(args[0]);  

        args.forEach(function(item,i,arr) {
            let temp = validate(item);

            while(res  && temp) {
                if(res > temp) {
                    res %= temp;
                } else {
                    temp %= res;
                }
            }   
            res += temp;
        });
    }
    catch(err) { 
        if(err.name === 'SyntaxError') {
            console.log('В ведённых данных ошибка');
            throw err;
        }
    }
    
    return res;
}