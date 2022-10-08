let x = null;
let y = null;
let operator = null;
let oldCalc = 0;

function sum(x, y) {     
    const x1 = parseFloat(x);
    const y1 = parseFloat(y);   
    return x1 + y1;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    if (y != 0) {
        return x / y;
    } else {
        return "ಠ_ಠ";
    }
}

function number(num) {    
        if(operator == null) {
            x =  (x + num).toString();
        } else {
        y = (y + num).toString();
    }
    console.log("x = " + x);
    console.log("y = " + y);
    console.log(operator);
}

function calc(opr) {    
    operator = opr;
}

function operate() {   
    if(x != null && operator != null && y != null){
        oldCalc = x + " " + operator + " " + y + " =" 
        switch(operator){
            case "+":
                x = sum(x, y);
                break;
            case "-":
                x = subtract(x, y);
                break;
            case "x":
                x = multiply(x, y);
                break;
            case "÷":
                x = divide(x, y);
                break;
        }    
        y = null;        
        if(x == "ಠ_ಠ"){
            clear();
        }
        console.log(x);
        console.log(y);
        console.log(oldCalc);
    }
}

function clear() {
    x = null;
    operator = null;
    y = 0;
    oldCalc = null;
    console.log(x);
    console.log(y);
}