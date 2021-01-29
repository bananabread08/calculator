const add = (x,y) => x + y;

const subtract = (x,y) => x - y;    

const multiply = (x,y) => x * y;  

const divide = (x,y) => {
    return y === 0 ? "ERROR" : x / y;  
}
    
function operate(str){
    let arr = Array.from(str);
    console.log(arr);
    const operator = arr.filter(str => str === "+" || str === "-" || str === "*" || str === "/");
    console.log(operator);
    let numbers = str.split(operator);
    console.log(numbers);
    switch (operator){
        case "+":
            add(numbers[0],numbers[1]);
            break;
        case "-":
            subtract(numbers[0],numbers[1]);
            break;
        case "*":
            multiply(numbers[0],numbers[1]);
            break;
        case "*":
            divide(numbers[0],numbers[1]);
            break;
    }
}

let equation = "";
const key = document.querySelectorAll("button");
const operators = document.querySelectorAll("#operator");
const display = document.getElementById("display");
const result = document.getElementById("result"); 



key.forEach(button => {
    button.addEventListener("click", e => {
        if(e.target.value === "="){
            display.textContent = "";
            result.textContent = operate(equation);
        }

        else{
            equation = equation + e.target.value;
            console.log(equation);
            display.textContent = `${equation}`;
        }
    });
});