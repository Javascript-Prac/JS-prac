let numOne = " ";
let operator = " ";
let numTwo = " ";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

// 번호를 누르면 해당 번호를 문자열 상태로 더해주기
document.querySelector("#num-0").addEventListener("click", () => {
  if (operator) {
    numTwo += "0";
  } else {
    numOne += "0";
  }
});

document.querySelector("#num-1").addEventListener("click", () => {
  if (operator) {
    numTwo += "1";
  } else {
    numOne += "1";
  }
});
document.querySelector("#num-2").addEventListener("click", () => {
  if (operator) {
    numTwo += "2";
  } else {
    numOne += "2";
  }
});
document.querySelector("#num-3").addEventListener("click", () => {
  if (operator) {
    numTwo += "3";
  } else {
    numOne += "3";
  }
});
document.querySelector("#num-4").addEventListener("click", () => {
  if (operator) {
    numTwo += "4";
  } else {
    numOne += "4";
  }
});
document.querySelector("#num-5").addEventListener("click", () => {
  if (operator) {
    numTwo += "5";
  } else {
    numOne += "5";
  }
});
document.querySelector("#num-6").addEventListener("click", () => {
  if (operator) {
    numTwo += "6";
  } else {
    numOne += "6";
  }
});
document.querySelector("#num-7").addEventListener("click", () => {
  if (operator) {
    numTwo += "7";
  } else {
    numOne += "7";
  }
});
document.querySelector("#num-8").addEventListener("click", () => {
  if (operator) {
    numTwo += "8";
  } else {
    numOne += "8";
  }
});
document.querySelector("#num-9").addEventListener("click", () => {
  if (operator) {
    numTwo += "9";
  } else {
    numOne += "9";
  }
});
document.querySelector("#plus").addEventListener("click", () => {});
document.querySelector("#minus").addEventListener("click", () => {});
document.querySelector("#multiply").addEventListener("click", () => {});
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
