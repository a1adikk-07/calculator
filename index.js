const firstNum = document.getElementById("firstnum");
const secondNum = document.getElementById("secondnum");
const plustButton = document.getElementById("plust");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const countButton = document.getElementById("count");
const result = document.getElementById("result");

let sign = "+";

plustButton.onclick = function () {
  sign = "+";
};

minusButton.onclick = function () {
  sign = "-";
};

multiplyButton.onclick = function () {
  sign = "*";
};

divideButton.onclick = function () {
  sign = "/";
};

function returnResult(yoursResult) {
  if (yoursResult > 0) {
    result.style.color = "green";
  } else {
    result.style.color = "red";
  }

  result.textContent = yoursResult;
}

countButton.onclick = function () {
  if (sign == "+") {
    const sum = Number(firstNum.value) + Number(secondNum.value);
    returnResult(sum);
  } else if (sign == "-") {
    const sum = Number(firstNum.value) - Number(secondNum.value);
    returnResult(sum);
  }

  if (sign == "*") {
    const sum = Number(firstNum.value) * Number(secondNum.value);
    returnResult(sum);
  }

  if (sign == "/") {
    const sum = Number(firstNum.value) / Number(secondNum.value);
    returnResult(sum);
  }
};
