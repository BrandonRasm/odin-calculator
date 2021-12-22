let leftNum, rightNum = '';
let currentOperator;

function UpdateNumber(selected) {
    if (currentOperator == undefined) leftNum = leftNum + selected;
    else rightNum = rightNum + selected;
}

function UpdateOperator(selected) {
    if (currentOperator != undefined && rightNum !== '') {
        Calculate();
    }
    currentOperator = selected;
}
function Calculate() {
    leftNum = currentOperator(leftNum, rightNum);
    currentOperator = undefined;
    rightNum = '';
}
function RefreshDisplay() {
    console.log(`refresh the display with : ${leftNum} + ${rightNum}`);
}



function Add(a, b) {
    return a + b;
}
function Subtract(a, b) {
    return a - b;
}
function Divide(a, b) {
    const roundAmount = 100000;
    return Math.round(((a / b) * roundAmount) / roundAmount);
}

function Multiply(a, b) {
    return a * b;
}