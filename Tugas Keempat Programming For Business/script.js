function calc(operator) {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);

    let result = 0;

    if (operator === "+") result = a + b;
    if (operator === "-") result = a - b;
    if (operator === "*") result = a * b;
    if (operator === "/") result = b !== 0 ? a / b : "Error";

    document.getElementById("output").textContent = result;
}
