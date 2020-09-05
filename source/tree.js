'use strict';

const tree = function (height) {
    if (height < 3) return null;

    let width = 1;
    let padding = height - 2;
    let tree = [];

    // верхняя часть елочки
    for (let i = 1; i < height; i++) {
        tree.push(" ".repeat(padding) + '*'.repeat(width) + " ".repeat(padding));
        padding--;
        width = width + 2;
    }
    // ствол елочки
    padding = Math.floor(width / 2 - 1);
    tree.push(" ".repeat(padding) + "|" + " ".repeat(padding));
    return tree.join("\n") + '\n';
}

