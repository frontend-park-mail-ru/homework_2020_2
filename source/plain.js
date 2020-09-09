/*
* Напишите функцию plain, которая будет принимать на вход массив массивов
* и создавать из них один общий массив. Массивы могут быть любой вложенности
* */

const plain = (arrays) => {
    while (arrays.filter((item) => Array.isArray(item)).length) {
        arrays.forEach((item, index, array) => {
            if (Array.isArray(item)) {
                array.splice(index, 1, ...item);
            }
        });
    }
    return arrays;
}

