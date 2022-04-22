const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");
const operatorDisplay = document.querySelector(".operator-display");
let decimalBtn = document.querySelector(".decimal");
let firstNumber = 0;
let secondNumber = 0;
let result;


//function to clear output screen
function clearOutput(){
    previous.innerText = "";
    current.innerText = "";
    operatorDisplay.innerText = "";
}

//calls function to clear screen on a click
clearBtn.addEventListener("click", ()=>{
    clearOutput();
})


//add number to screen on click
numberBtns.forEach(button => {
    button.addEventListener('click', ()=>{     
        current.innerText += button.innerText;
    })
})

decimalBtn.addEventListener('click', ()=>{
    addDecimal();
})

//when pressing an operator button, the current operand is moved to the previous operand place
operationBtns.forEach(button =>{
    button.addEventListener('click', ()=>{
        previous.innerText = current.innerText;
        firstNumber = previous.innerText;
        current.innerText = "";
        operatorDisplay.innerText = button.innerText;

    })
})


//calculates result based on chosen operator
equalsBtn.addEventListener('click', ()=>{
    secondNumber = current.innerText;
    if (operatorDisplay.innerText === "+") {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    }
    if (operatorDisplay.innerText === "-") {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    }
    if (operatorDisplay.innerText === "*") {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }
    if (operatorDisplay.innerText === "/") {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    
    //Display error message if user tries to divide by 0
    if (secondNumber === "0" && operatorDisplay.innerText === "/") {
        errorMessage();
    }
    
    displayResult();
})

//deletes last number of the current operand on click
deleteBtn.addEventListener('click', ()=>{
    current.innerText = current.innerText.slice(0, -1);
})

//displays result
function displayResult(){
    clearOutput();
    //rounds the result in case of a ridiculous number of decimals
    current.innerText = Math.round(result * 10000) / 10000;
}


function errorMessage(){
    clearOutput();
    result = "Division by 0 impossible";
}

//
function addDecimal(){
    if (!current.innerText.includes(".")) {
        current.innerText += ".";                
    }
}
