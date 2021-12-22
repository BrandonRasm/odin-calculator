let leftNum, rightNum = '';
let currentOperator;







//Button press event listener functions
function UpdateNumber(selected) {
    if (currentOperator == undefined) leftNum = leftNum + selected; //current operator is only defined when we would be modifying the right number
    else rightNum = rightNum + selected;
    RefreshDisplay();
}

function UpdateOperator(selected) {
    if (currentOperator != undefined && rightNum !== '') {  //tests if there are already 2 terms and 1 operator and condenses it into the leftnum
        Calculate();
    }
    currentOperator = selected;
    RefreshDisplay();
}
function Calculate() {
    leftNum = currentOperator(leftNum, rightNum);
    currentOperator = undefined;
    rightNum = '';
    RefreshDisplay();
}

//Updates the text display.
function RefreshDisplay() {
    console.log(`refresh the display with : ${leftNum} + ${rightNum}`);
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
    return Math.round(((parseFloat(a) / parseFloat(b)) * roundAmount) / roundAmount);
}

function Multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}