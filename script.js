function insert(num) {
    document.getElementById('display').value += num;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    var exp = document.getElementById('display').value;
    if (exp) {
        document.getElementById('display').value = eval(exp);
    }
}
function trigo(op) {
    var exp = document.getElementById('display').value;
    var result;
    if (op == 'sin') {
        result = Math.sin(exp);
    } else if (op == 'cos') {
        result = Math.cos(exp);
    } else if (op == 'tan') {
        result = Math.tan(exp);
    }
    document.getElementById('display').value = result;
}
function root() {
    var exp = document.getElementById('display').value;
    var result = Math.sqrt(exp);
    document.getElementById('display').value = result;
}
function square() {
    var exp = document.getElementById('display').value;
    var result = Math.pow(exp, 2);
    document.getElementById('display').value = result;
}
function cube() {
    var exp = document.getElementById('display').value;
    var result = Math.pow(exp, 3);
    document.getElementById('display').value = result;
}

function raizCuadrada() {
    var numero = parseFloat(document.getElementById("display").value);
    var resultado = Math.sqrt(numero);
    document.getElementById("display").value = resultado;
    num1 = resultado;
    num2 = null;
    operacionActual = null;
}

   
function multiplicar() {
    var resultado = null;
    var numero1 = parseFloat(numero1);
    var numero2 = parseFloat(numero2);
    switch (operacionActual) {
        
        case "*":
            resultado = num1 * num2;
            break;
        
    }
    document.getElementById("display").value = resultado;
    numero1 = resultado;
    numero2 = null;
    operacionActual = null;
}
function insert(num) {
    document.getElementById('display').value += num;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    var exp = document.getElementById('display').value;
    if (exp) {
        document.getElementById('display').value = eval(exp);
    }
}
