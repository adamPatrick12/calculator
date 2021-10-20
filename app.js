num1Btn = document.querySelector(".btn1")
num2Btn = document.querySelector(".btn2")
num3Btn = document.querySelector(".btn3")
num4Btn = document.querySelector(".btn4")
num5Btn = document.querySelector(".btn5")
num6Btn = document.querySelector(".btn6")
num7Btn = document.querySelector(".btn7")
num8Btn = document.querySelector(".btn8")
num9Btn = document.querySelector(".btn9")
num0Btn = document.querySelector(".btn0")
deciBtn = document.querySelector(".btnDeci")
clearBtn = document.querySelector('.btnClear')
output = document.querySelector(".display")
equalsBtn = document.querySelector(".btnEq")
plusBtn = document.querySelector(".btnPlus")
minusBtn = document.querySelector(".btnMinus")
multiBtn = document.querySelector(".btnMulti")
divBtn = document.querySelector(".btnDiv")

let valueStored = ""
let symbol = ""
let valueStoredArr = []

num1Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "1"
    output.prepend(numDisplay);
    if(valueStored === ""){}
    valueStored += "1"
});
  
num2Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "2"
    output.prepend(numDisplay);
    valueStored += "2"
});

num3Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "3"
    output.prepend(numDisplay);
    valueStored += "3"
});

num4Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "4"
    output.prepend(numDisplay);
    valueStored += "4"

});

num5Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "5"
    output.prepend(numDisplay);
    valueStored += "5"

});
  
num6Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "6"
    output.prepend(numDisplay);
    valueStored += "6"

});

num7Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "7"
    output.prepend(numDisplay);
    valueStored += "7"

});

num8Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "8"
    output.prepend(numDisplay);
    valueStored += "8"

});

num9Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "9"
    output.prepend(numDisplay);
    valueStored += "9"
});

num0Btn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "0"
    output.prepend(numDisplay);
    valueStored += "0"

});

deciBtn.addEventListener('click', function(){

    numDisplay = document.createElement("p")
    numDisplay.textContent = "."
    output.prepend(numDisplay);
    valueStored += "."

});

plusBtn.addEventListener('click', function(){

    storeValue(valueStored)
    symbol = "+"
    valueStored = ""
});

minusBtn.addEventListener('click', function(){

    storeValue(valueStored)
    symbol = "-"
    valueStored = ""
});

multiBtn.addEventListener('click', function(){

    storeValue(valueStored)
    symbol = "x"
    valueStored = ""
});

divBtn.addEventListener('click', function(){

    storeValue(valueStored)
    symbol = "/"
    valueStored = ""
});

clearBtn.addEventListener('click', function(){

    while (output.firstChild) {
        output.removeChild(output.firstChild);
        valueStored = ""
    }
});

equalsBtn.addEventListener('click', function(){

    storeValue(valueStored)
    let result = operator(symbol,valueStoredArr[0],valueStoredArr[1])
    valueStoredArr.splice(0,2, result)
    console.log(valueStoredArr)
    valueStored = ""

});





storeValue = function (value){
  
    if(value === ""){
       
    }else{
        intValueStored = parseInt(value);
        valueStoredArr.push(intValueStored)
        return valueStoredArr
    }
    
    

}


let add = function(num1,num2){
    let sum 

    sum = num1+num2;
    return sum;

}

let sub = function(num1,num2){
    let subtract 

    subtract = num1-num2;
    return subtract;

}

let multi = function(num1,num2){
    let multiply 

    multiply = num1*num2;
    return multiply;

}

let div = function(num1,num2){
    let division 

    division = num1/num2;
    return division;

}

let operator = function(op,num1,num2){
    
    if(op === "+"){
        return add(num1,num2)  
    }else if(op === "-"){
        return sub(num1,num2)
    }else if (op === "x"){
        return multi(num1,num2)
    }else{
        return div(num1,num2)
    }
}

 



    

