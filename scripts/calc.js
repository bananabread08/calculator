const add = (x,y) => x + y;

const subtract = (x,y) => x - y;

const multiply = (x,y) => x * y;

const divide = (x,y) => {
    return y === 0 ? "ERROR" : x / y;  
}
    
function operate(a,b, operator){
    switch (operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}

function isOperator(x){
    return operatorArr.includes(x);
}

function resetDisplay(){
    display.textContent = "";
    result.textContent = "";
}

function splitEquation(eqnStr){
    let eqnArr = Array.from(eqnStr);
    let operateVal = eqnArr.filter(element => {
        if (isOperator(element)) return element;
    });
    operateVal = operateVal.toString();
    let numbers = eqnStr.split(operateVal);
    eqnStr = operate(parseFloat(numbers[0]), parseFloat(numbers[1]), operateVal);
    return eqnStr;
}

function getInput(e){ //checks user input and evaluates the equation upon clicking "="
    if(equation === "" && isOperator(e.target.value)){ 
        resetDisplay();
    }
    else if(e.target.value === "="){ //user inputs equals
        if(equation === ""){ //no initial value, reset
            resetDisplay();
        }
        else{ //if values are present, calculate
            equation = splitEquation(equation);
            display.textContent = "";
            result.textContent = `${equation}`;
        }
    }
    else if(isOperator(e.target.value)){ //user inputs operator
        let newEqn = Array.from(equation);
        if((newEqn.includes("+") || newEqn.includes("/") || newEqn.includes("*") || newEqn.includes("-")) && (numArr.includes(equation.slice(-1)))){ //user inputs operator after an equation of 2 numbers
            equation = splitEquation(equation);
            display.textContent = `${equation}${e.target.value}`;
            result.textContent = `${equation}`;
            equation = equation + e.target.value; 
        }

        else{ //
            result.textContent = `${equation}`;
            display.textContent = `${equation}${e.target.value}`;
            equation = equation + e.target.value;
        }
    }
    else if(e.target.value === "clearall"){
        equation = "";
        resetDisplay();
    }
    else if(e.target.value === "delete"){
        equation = equation.substr(0, equation.length -1);
        display.textContent = `${equation}`;
    }
    else{
        display.textContent = "";
        equation = equation + e.target.value;
        display.textContent = `${equation}`;
    }
}

let equation = "";
const operatorArr = ["+", "-", "*", "/"];
const numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const key = document.querySelectorAll("button");
const display = document.getElementById("display");
const result = document.getElementById("result"); 

key.forEach(button => { //click events on every button
    button.addEventListener("click", getInput);
});