function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter both numbers");
        return;
    }

    if (op === "/" && n2 === 0) {
        alert("Division by zero is not allowed!");
        return;
    }

    switch(op) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/": result = n1 / n2; break;
    }

    let box = document.getElementById("resultBox");
    box.innerText = "Result: " + result;

    // Bonus: Color change
    if (result > 0) box.style.background = "lightgreen";
    else if (result < 0) box.style.background = "lightcoral";
    else box.style.background = "lightgray";
}
