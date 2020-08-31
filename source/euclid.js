'use strict';

const euclid = (... args) => {
    let res = args[0];
    for(let i = 1 ; i < args.length; i++){
        while(res  && args[i]){
            res  > args[i] ? 
            res  %= args[i] :
            args[i] %= res ;
        }
        res  += args[i];
    }
    return res ;
}