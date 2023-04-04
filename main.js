let display = document.querySelector(".display");
let keyList = document.querySelectorAll(".show-display");
let equal = document.querySelector(".calculate").addEventListener ("click", result);
let displayClear = document.querySelector(".clear").addEventListener ("click", clear);
let allDisplayClear = document.querySelector(".all-clear").addEventListener ("click", allClear);

function showDisplay(event) {
    const key = event.target.innerText;
    if (display.innerText == 0) {
        display.innerText = key;
    } else {
        display.innerText += key;
    }
}

function result() {
    let answer = display.innerText;
    display.innerText = eval(answer);
}

function clear() {
    let numbers = display.innerText;
    if (numbers.length == 1) {
        numbers = 0;
    } else {
        numbers = numbers.slice(0, -1);
    }
    display.innerText = numbers;
}

function allClear() {
    display.innerText = 0;
}

keyList.forEach(key => {
    key.addEventListener ("click", showDisplay)
});