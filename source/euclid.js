'use strict';

const euclid = (... args) => {
    const validate = (arg) =>{
       if(Number.isInteger(arg) && arg > 0 ){
            return arg;
       }
       else throw new SyntaxError("validation error")
    } 
    try{
    var res = validate(args[0]);
    for(let i = 1 ; i < args.length; i++){
        let temp = validate(args[i])
        while(res  && temp){
            res  > temp ? 
            res  %= temp :
            temp %= res ;
        }
        res  += temp;
    }}
    catch(err){ 
        if(err.name == "SyntaxError"){
            console.log("В веденных данных ошибка")
        }
        else
            throw err;
    }

    return res ;
}