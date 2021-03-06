let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (event) => {
  if (!operator) {
    // 연산자 비어있다있다면
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if (!numTwo) {
    $result.value = ""; // 넘버투가 없다면 화면을 지워라 (넘버투 처음입력할때 화면을 비워라)
  }
  numTwo += event.target.textContent;
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

//고차함수
const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력하세요");
  }
};

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document;
document
  .querySelector("#devide")
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator("*"));
document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = numOne - numTwo;
        break;
      case "*":
        $result.value = numOne * numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
  } else {
    alert("숫자를 먼저 입력하세요");
  }
  // 더하기는 문자열 끼리 연산할 수 있으니까 parseIn 쓰고 나머지 연산자는 숫자로 바꿔주기 때문에 parseInt 쓸 필요가 없다.
});

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
}); // 초기 상태를 맨 처음에 몰아넣고 초기화할때는 그대로 가져오기
