"use strict";
exports.__esModule = true;
function demo() {
    console.log("abc");
    var input = document.getElementById("img-name");
    var name = input.value;
    var result = "./img/" + name + ".png";
    var h = document.getElementById("dice-1");
    console.log(result);
    h.src = result;
}
function lac() {
    var max = 6;
    var min = 1;
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    var h1 = document.getElementById("dice-1");
    var result1 = "./img/dice" + a + ".png";
    h1.src = result1;
    var b = Math.floor(Math.random() * (max - min + 1)) + min;
    var h2 = document.getElementById("dice-2");
    var result2 = "./img/dice" + b + ".png";
    h2.src = result2;
}
