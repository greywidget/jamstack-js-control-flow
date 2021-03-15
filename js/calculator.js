function setResult(operand1, operand2, operator) {

    var op1Num = parseInt(operand1);
    var op2Num = parseInt(operand2);
    var outString;
    var result;

    switch (operator) {
        case '+':
            result = op1Num + op2Num;
            break;
        case '-':
            result = op1Num - op2Num;
            break;
        case '*':
            result = op1Num * op2Num;
            break;
        case '/':
            result = (op1Num / op2Num).toFixed(2);
            break;
        case '%':
            result = op1Num % op2Num;
    }

    outString = `${operand1} ${operator} ${operand2} = ${result}`
    document.getElementById('result').innerHTML = outString;
}

function getMathsChoice() {
    var operand1 = document.getElementById('operand1').value;
    var operand2 = document.getElementById('operand2').value;
    var operator = document.getElementById('operator').value;
    // Just return if any are blank. There will be a validation message
    if (operand1 == "" || operand2 == "" || operator =="") {
        return;
    }

    setResult(operand1, operand2, operator);
}