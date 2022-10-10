const numBtns = document.querySelectorAll(".numBtn");
const bottomScreen = document.querySelector(".bottomScreen");
const topScreen = document.querySelector(".topScreen");
const equalBtn = document.querySelector(".equalBtn")
const operateBtns = document.querySelectorAll(".operateBtn")
const clearBtn = document.querySelector("#btnClear")
const ceBtn = document.querySelector(".clearBtn")

function add(a, b){
  result = a + b;
  console.log(result);
  tempNum = result
}

function subtract(a, b){
  result = a - b;
  console.log(result);
  tempNum = result
};

function multiply(a, b){
  result = a * b;
  console.log(result);
  tempNum = result
};

function divide(a, b){
  result = a/b;
  console.log(result);
  tempNum = result
};

function operate(operator){
  let a = tempNum
  let b = parseFloat(bottomScreen.textContent)
  switch (operator) {
    case "+":
      add(a, b);
      bottomScreen.textContent = result;
      break;
    case "-":
      subtract(a, b);
      bottomScreen.textContent = result;
      break;
    case "x":
      multiply(a, b);
      bottomScreen.textContent = result;
      break;
    case "÷":
      divide(a, b);
      bottomScreen.textContent = result;
      break;
    default:
      return "ERROR"
  }
};

let tempNum = 0
let tempOperator = ""
let result = 0
bottomScreen.textContent = "0"
topScreen.textContent = ""

numBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let btnNum = e.target.textContent
    let btnId = e.target.id
    if (bottomScreen.textContent === "0"){
      bottomScreen.textContent = ""
    } if (btnId === "deciBtn" && bottomScreen.textContent.includes(".")){
      return 
    } else {
      //do nothing
    }
    bottomScreen.textContent += btnNum
  })
})

operateBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let operator = e.target.textContent
     if (topScreen.textContent.includes("=")){
      tempOperator = operator
      updateScreen(operator)
    } else if (topScreen.textContent === ""){
      tempNum = parseFloat(bottomScreen.textContent);
      topScreen.textContent = bottomScreen.textContent;
      topScreen.textContent += operator;
      bottomScreen.textContent = "";
      tempOperator = operator
    } else if (!topScreen.textContent.includes(operator)){
      operator = tempOperator
      operate(operator)
      operator = e.target.textContent
      tempOperator = operator
      updateScreen(operator)
    } else if (topScreen.textContent.includes(operator)){
      operate(operator)
      updateScreen(operator)
      tempOperator = operator
    }
  })
});

equalBtn.addEventListener("click", (e) => {
  if (topScreen.textContent === ""){
    // do nothing
  } else if(!topScreen.textContent.includes("=")) {
    topScreen.textContent += bottomScreen.textContent
    console.log(tempOperator)
    operator = tempOperator
    operate(operator)
    topScreen.textContent += "="
  } else {
    // do nothing
  }
})

clearBtn.addEventListener("click", (e) =>{
  topScreen.textContent = ""
  bottomScreen.textContent = "0"
  tempNum = 0
})

ceBtn.addEventListener("click", (e) =>{
  bottomScreen.textContent = "0"
})



function updateScreen(operator){
  topScreen.textContent = result
  topScreen.textContent += operator
  bottomScreen.textContent = ""
}