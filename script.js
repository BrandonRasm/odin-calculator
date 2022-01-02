let leftNum = '';
let rightNum = '';
let currentOpText = '';
let currentOperator;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const inputDisplay = document.querySelector(".inputs");
const equalsButton = document.querySelector(".equals");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        UpdateNumber(button.textContent);
    });
});
operatorButtons.forEach(ops => {
    let opsFunction;
    switch (ops.textContent) {
        case '+': opsFunction = Add; break;
        case '-': opsFunction = Subtract; break;
        case 'x': opsFunction = Multiply; break;
        case '/': opsFunction = Divide; break;
        default: alert("something went wrong! in setting operator event listeners");
    }
    ops.addEventListener("click", () => {

        UpdateOperator(opsFunction, ops.textContent);
    });
});
equalsButton.addEventListener("click", () => {

    Calculate();
});




//Button press event listener functions
function UpdateNumber(selected) {
    if (currentOperator == undefined) leftNum = leftNum + selected; //current operator is only defined when we would be modifying the right number
    else rightNum = rightNum + selected;
    RefreshDisplay();
}

function UpdateOperator(selected, opsText) {
    if (currentOperator != undefined && rightNum !== '') {  //tests if there are already 2 terms and 1 operator and condenses it into the leftnum
        Calculate();
    }
    currentOperator = selected;
    currentOpText = opsText;
    RefreshDisplay();
}
function Calculate() {
    if (currentOperator != undefined && rightNum !== '') {
        leftNum = currentOperator(leftNum, rightNum);
    }
    currentOperator = undefined;
    rightNum = '';
    RefreshDisplay();
}

//Updates the text display.
function RefreshDisplay() {
    currentOpText = currentOperator ? currentOpText : '';

    inputDisplay.textContent = `${leftNum} ${currentOpText} ${rightNum}`;
}


//Operator Functions
function Add(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function Subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}
function Divide(a, b) {
    const roundAmount = 100000; //placeholder amount for decimals
    return Math.round((parseFloat(a) / parseFloat(b)) * roundAmount) / roundAmount;
}

function Multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}