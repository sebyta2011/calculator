let num1 = [];
let operator = '';
let num2 = [];

function cuenta(num1, operator, num2) {
    let ret = 0;
    if(operator=='/') {
        ret = num1 / num2;
    }
    else if(operator=='*') {
        ret = num1 * num2;
    }else if(operator=='-') {
        ret = num1 - num2;
    }else if(operator=='+') {
        ret = num1 + num2;
    }
    return ret;
}


// document.getElementById('nueve').addEventListener("click", function() {
//     num1.push(nueve.value.toString());
// });

let numeros = document.getElementsByClassName("numero");
for(i=0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", function() {
        num1.push(this.value.toString());
    })
}


// document.getElementsByClassName("numero").addEventListener("click", function() {
//     num1.push(numero.value.toString());
// })