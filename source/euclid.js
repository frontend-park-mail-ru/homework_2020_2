'use strict';

const euclid = (... args) => {
    var res = args[0];
    for(var i = 1 ; i < args.length; i++){
        while(res  && args[i]){
            res  > args[i] ? 
            res  %= args[i] :
            args[i] %= res ;
        }
        res  += args[i];
    }
    return res ;
}