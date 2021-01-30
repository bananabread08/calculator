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

function splitEquation(eqnStr){
    let eqnArr = Array.from(eqnStr);
    let operateVal = eqnArr.filter(element => {
        if (isOperator(element)) return element;
    });
    operateVal = operateVal.toString();
    let numbers = eqnStr.split(operateVal);
    eqnStr = operate(parseInt(numbers[0]), parseInt(numbers[1]), operateVal);
    return eqnStr;
}

function getInput(e){ //checks user input and evaluates the equation upon clicking "="
    if(equation === "" && isOperator(e.target.value)){ 
        display.textContent = "";
        result.textContent = "";
    }

    else if(e.target.value === "="){
        equation = splitEquation(equation);
        display.textContent = "";
        result.textContent = `${equation}`;
    }

    else if(isOperator(e.target.value)){
        display.textContent = "";
        result.textContent = `${equation}`;
        display.textContent = `${e.target.value}`;
        equation = equation + e.target.value;
    }

    else if(e.target.value === "clearall"){
        equation = "";
        display.textContent = "";
        result.textContent = "";
    }

    else{
        display.textContent = "";
        equation = equation + e.target.value;
        display.textContent = `${equation}`;
    }
}

let equation = "";
const operatorArr = ["+", "-", "*", "/"];
const key = document.querySelectorAll("button");
const display = document.getElementById("display");
const result = document.getElementById("result"); 


key.forEach(button => { //click events on every button
    button.addEventListener("click", getInput);
});