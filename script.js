const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");



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
    return a / ba
}


//function to clear output screen
function clearOutput(){
    previous.innerText = "";
    current.innerText = "";
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

//when pressing an operator button, the current operand is moved to the previous operand place
operationBtns.forEach(button =>{
    button.addEventListener('click', ()=>{
        previous.innerText = current.innerText;
        current.innerText = "";
    })
})

//deletes last number of the current operand on click
deleteBtn.addEventListener('click', ()=>{
    current.innerText = current.innerText.slice(0, -1);
})
