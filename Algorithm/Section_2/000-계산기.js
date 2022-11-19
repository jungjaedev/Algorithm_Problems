/**
 * ABOUT
 *
 * DATE: 2022-11-19
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * "1+1=" => 1, 1, 1, 2
 * "10+12=" => 1, 10, 10, 1, 12, 22
 **/

function solution(str) {
  // 1 -> 1
  // 0 -> 10
  // + -> 10
  // 1 -> 1
  // 2 -> 12
  // = -> 22
  // 이전에 입력한 값이 부호이면(+-&/)
  let printedStr = "";
  let calc = 0;
  let op = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i - 1] === "/" ||
      str[i - 1] === "*" ||
      str[i - 1] === "-" ||
      str[i - 1] === "+"
    ) {
      printedStr = "";
    }
    if (str[i] === "/" || str[i] === "*" || str[i] === "-" || str[i] === "+") {
      calc = Number(printedStr);
      op = str[i];
    } else if (str[i] === "=") {
      if (op === "/") {
        calc /= Number(printedStr);
      } else if (op === "*") {
        calc *= Number(printedStr);
      } else if (op === "-") {
        calc -= Number(printedStr);
      } else if (op === "+") {
        calc += Number(printedStr);
      }
      printedStr = calc;
      calc = 0;
    } else if (str[i] === "C") {
      printedStr = "";
    } else {
      printedStr += str[i];
    }
    console.log(printedStr);
  }
}

const str1 = "1+1=";
const str2 = "10+12=";
console.log(solution(str2));
