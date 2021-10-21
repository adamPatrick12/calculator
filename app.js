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
plusMinBtn = document.querySelector(".btnPlusMin")

let valueStored = ""                //Variables to store number/operator inputs
let symbol = ""
let valueStoredArr = []
let displayAnswer = ""
let operatorClick = 0;

num1Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("1")
});
  
num2Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("2")
});

num3Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("3")
});

num4Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("4")
 
});

num5Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("5")

});
  
num6Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("6")

});

num7Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("7")

});

num8Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("8")

});

num9Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("9")
});

num0Btn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement("0")

});

deciBtn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printNumberElement(".")

});

plusBtn.addEventListener('click', function(){

    printAnswer()
    symbol = "+"

});

minusBtn.addEventListener('click', function(){

    printAnswer()
    symbol = "-"
});

multiBtn.addEventListener('click', function(){

    printAnswer()
    symbol = "x"
});

divBtn.addEventListener('click', function(){

    printAnswer()
    symbol = "/"
});

clearBtn.addEventListener('click', function(){

    while (output.firstChild) {
        output.removeChild(output.firstChild);
        valueStored = ""
        valueStoredArr = []
    }
});

plusMinBtn.addEventListener('click', function(){

    clearAnswerScreen()
    
    printPlusMinus("-")

});

equalsBtn.addEventListener('click', function(){

    printAnswer()

});

printAnswer = function (){

    operatorClick = 1
    storeValue(valueStored)
    valueStored = ""
    
    if(valueStoredArr[1] == null){
    
    }else{
        
        while (output.firstChild) {
            
            output.removeChild(output.firstChild);
            operatorClick = 0; 
        }
        displayAnswer = answer()
        answerDisplay = document.createElement("p")
        answerDisplay.textContent = displayAnswer
        output.prepend(answerDisplay);
    }
}

printNumberElement = function (num){

    if(operatorClick === 0){
        numDisplay = document.createElement("p")
        numDisplay.textContent = num
        output.prepend(numDisplay);
        valueStored += num
    }else{
        while (output.firstChild) {
            output.removeChild(output.firstChild);
            operatorClick = 0; 
        }
            numDisplay = document.createElement("p")
            numDisplay.textContent = num
            output.prepend(numDisplay);
            valueStored += num
    }
}

printPlusMinus = function (num){

    
        if(operatorClick === 0){
            numDisplay = document.createElement("p")
            numDisplay.textContent = num
            output.append(numDisplay);
            valueStored += num
        }else{
            while (output.firstChild) {
                output.removeChild(output.firstChild);
                operatorClick = 0; 
            }
                numDisplay = document.createElement("p")
                numDisplay.textContent = num
                output.append(numDisplay);                  //Append instead of prepend so negative symbol (-) can be placed in front.
                valueStored += num
        } 
    }
    
clearAnswerScreen = function (){

    if(valueStoredArr === displayAnswer)
    
    while (output.firstChild) {
        
        output.removeChild(output.firstChild);
        operatorClick = 0; 
        displayAnswer = ""
    }
}

answer = function (){

    let result = operator(symbol,valueStoredArr[0],valueStoredArr[1])
    valueStoredArr.splice(0,2, result)
    console.log(valueStoredArr)
    
    if(valueStoredArr[0].toString().length > 9){
        valueStoredArr = []
        valueStoredArr.push("Out of range")
    }
    return valueStoredArr

}


storeValue = function (value){
  
    if(value === ""){   
    }else{
        intValueStored = parseFloat(value);
        intValueStored = Math.round(intValueStored * 1000)/1000
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

    multiply = (num1)*(num2);
    return multiply;

}

let div = function(num1,num2){
    let division 

    division = num1/num2;
    division = Math.round(division * 1000)/1000
    
    if(num2 === 0){
        division = "Error"
    }
    
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

 



    

