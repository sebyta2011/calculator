let num1 = '';
let operator = '';
let num2 = '';

function cuenta() {
    let ret = 0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(num2=='') num2=0;
    if(operator=='/') {
        if(num2 == 0) {
            ret = 'xd';
            num1 = '';
            num2 = ''
            operator = '';
            return ret;
        }
        ret = num1 / num2;
    }
    else if(operator=='*') {
        ret = num1 * num2;
    }else if(operator=='-') {
        ret = num1 - num2;
    }else if(operator=='+') {
        ret = num1 + num2;
    }
    if(ret!=0) num1=ret;
    operator = '';
    num2 = '';
    console.log(num1);
}

let operadores = document.getElementsByClassName("operador");
for(i=0; i < operadores.length; i++) {
    operadores[i].addEventListener("click", function() {
        if(num2 != ''){
            cuenta()
        }
        operator = (this.value.toString());
    }
)}

let clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    num1 = '';
    operator = '';
    num2 = '';
})

let operacionTriunfo = document.getElementById("operar");
operacionTriunfo.addEventListener("click", function() {
    cuenta();
})

let numeros = document.getElementsByClassName("numero");
for(i=0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", function() {
        console.log(this.value);
        if(operator == ''){
        num1 += (this.value.toString());
        }
        else {
        num2 += (this.value.toString());
        }
    })
}

// CSS
//Operadores