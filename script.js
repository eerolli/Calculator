const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const previous = document.querySelector("[data-previous]");
const current = document.querySelector("[data-current]");


function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b){
    if(operator === "+"){
        add(a, b);
    }
    else if(operator === "-"){
        subtract(a, b);
    }
    else if(operator === "*"){
        multiply(a, b);
    }
    else if(operator === "/"){
        divide(a, b);
    }
}