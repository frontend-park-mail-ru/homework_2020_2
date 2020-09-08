'use strict';

const max = numbers => Math.max(...numbers);

function rle(originData) {
    let compressedData="";
    if(typeof originData!=="string")return "NOT STRING!";
    let counter = 1, prevSymbol=originData.charAt(0);
    for (let i=1; i<originData.length; i++) {
        if (!isNaN(originData.charAt(i))) return "UNEXPECTED SYMBOL!";
        if (originData.charAt(i) === prevSymbol) {
            counter++;
        } else {
            compressedData=addToCompressed(compressedData, prevSymbol, counter);
            counter = 1;
            prevSymbol=originData.charAt(i);
        }
    }
    compressedData=addToCompressed(compressedData, prevSymbol, counter)
    return compressedData;
}

function addToCompressed(compressed, symbol, counter){
    compressed += symbol;
    if(counter!==1)
        compressed += counter;
    return compressed;
}