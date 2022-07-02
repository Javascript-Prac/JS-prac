let numOne = " ";
let operator = " ";
let numTwo = " ";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber = (event) => {
  if (operator) {
    // 비어있지 않다.
    numTwo += event.target.textContent;
  } else {
    // 비어있다.
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent;
}; // 함수가 함수를 리턴하는 고차함수

// 번호를 누르면 해당 번호를 문자열 상태로 더해주기
// 클릭하면 해당번호 textContent로 가져오기
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력하세요");
  }
};

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click", onClickOperator("-"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("X"));
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
