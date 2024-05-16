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

countButton.onclick = function () {
  if (sign == "+") {
    const plustButton = `${Number(
      firstNum.value
    )} ${sign} Number(secondNum.value)`;

    result.textContent = plustButton;
  }
  //   else if (sign == "-") {
  //     const minusButton = Number(firstNum.value) - Number(secondNum.value);

  //     result.textContent = minusButton;
  //   }

  //   if (sign == "*") {
  //     const multiplyButton = Number(firstNum.value) * Number(secondNum.value);

  //     result.textContent = multiplyButton;
  //   }

  //   if (sign == "/") {
  //     const divideButton = Number(firstNum.value) / Number(secondNum.value);

  //     result.textContent = divideButton;
  //   }
};

// countButton.onclick = function () {
//   const plustButton = Number(firstNum.value) + Number(secondNum.value);

//   result.textContent = plustButton;
// };
