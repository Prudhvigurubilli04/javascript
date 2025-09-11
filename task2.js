var appName = "simple callback calculator";
console.log(appName);
function showAppName() {
    console.log("Welcome to" + appName)
}

calculator(10, 5, add);
calculator(10, 5, subtract);
calculator(10, 5, multiply);
calculator(10, 0, divide);

function calculator(num1, num2, operationcallback) {
    let a = num1;
    let b = num2;
    let result = operationcallback(a, b);
    console.log("result:", + result);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "cannot divide by zero";
    }
    return a / b;
}
showAppName();
