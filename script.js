function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    const roundAmount = 100000;
    return Math.round(((a / b) * roundAmount) / roundAmount);
}

function multiply(a, b) {
    return a * b;
}