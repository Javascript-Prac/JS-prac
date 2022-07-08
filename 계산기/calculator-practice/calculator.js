const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

let operator = "";
let numOne = "";
let numTwo = "";

const clickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if (!numTwo) {
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};

const clickOperator = (op) => () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;

      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;

      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;

      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;

      default:
        break;
    }
    numOne = $result.value;
    numTwo = "";
  }
  operator = op;
  $operator.value = op;

  if (!numOne) {
    alert("숫자를 먼저 입력하세요!");
  }
};

document.querySelector("#num-0").addEventListener("click", clickNumber);
document.querySelector("#num-1").addEventListener("click", clickNumber);
document.querySelector("#num-2").addEventListener("click", clickNumber);
document.querySelector("#num-3").addEventListener("click", clickNumber);
document.querySelector("#num-4").addEventListener("click", clickNumber);
document.querySelector("#num-5").addEventListener("click", clickNumber);
document.querySelector("#num-6").addEventListener("click", clickNumber);
document.querySelector("#num-7").addEventListener("click", clickNumber);
document.querySelector("#num-8").addEventListener("click", clickNumber);
document.querySelector("#num-9").addEventListener("click", clickNumber);

document.querySelector("#plus").addEventListener("click", clickOperator("+"));
document.querySelector("#minus").addEventListener("click", clickOperator("-"));
document.querySelector("#divide").addEventListener("click", clickOperator("/"));
document
  .querySelector("#multiply")
  .addEventListener("click", clickOperator("*"));
document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;

      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;

      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;

      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;

      default:
        break;
    }
    numOne = $result.value;
    numTwo = "";
    operator = "";
    $operator.value = "";
  } else {
    alert("숫자를 먼저 입력하세요!");
  }
});
document.querySelector("#clear").addEventListener("click", () => {
  operator = "";
  $operator.value = "";
  $result.value = "";
  numOne = "";
  numTwo = "";
});
