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
        //disables decimal button if there already is a decimal point in the current number
        if (button.classList.contains("decimal")) {
            if (current.innerText.includes(".")) {
                button.classList.add("disabled")
                current.innerText = current.innerText;
            }
        }
        current.innerText += button.innerText;
    })
})

//when pressing an operator button, the current operand is moved to the previous operand place
operationBtns.forEach(button =>{
    button.addEventListener('click', ()=>{
        previous.innerText = current.innerText;
        firstNumber = previous.innerText;
        current.innerText = "";
        operatorDisplay.innerText = button.innerText;
        //ables decimal button once an operator button is pressed
        removeDisabled();
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
    
    operate();
})

//deletes last number of the current operand on click
deleteBtn.addEventListener('click', ()=>{
    current.innerText = current.innerText.slice(0, -1);
})

//displays result
function operate(){
    clearOutput();
    current.innerText = result;
}


function errorMessage(){
    clearOutput();
    result = "Division by 0 impossible";
}

//function to able decimal button
function removeDisabled(){
    decimalBtn.classList.remove("disabled");
}