let numOne = " ";
let operator = " ";
let numTwo = " ";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (number) => () => {
  if (operator) {
    // 비어있다.
    numTwo += number;
  } else {
    // 비어있지 않다.
    numOne += number;
  }
};

// 번호를 누르면 해당 번호를 문자열 상태로 더해주기
document.querySelector("#num-0").addEventListener("click", "0");
document.querySelector("#num-1").addEventListener("click", "1");
document.querySelector("#num-2").addEventListener("click", "2");
document.querySelector("#num-3").addEventListener("click", "3");
document.querySelector("#num-4").addEventListener("click", "4");
document.querySelector("#num-5").addEventListener("click", "5");
document.querySelector("#num-6").addEventListener("click", "6");
document.querySelector("#num-7").addEventListener("click", "7");
document.querySelector("#num-8").addEventListener("click", "8");
document.querySelector("#num-9").addEventListener("click", "9");
document.querySelector("#plus").addEventListener("click", () => {});
document.querySelector("#minus").addEventListener("click", () => {});
document.querySelector("#multiply").addEventListener("click", () => {});
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
