/**
 * ABOUT
 *
 * DATE: 2022-11-03
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 올바른 페어 맞는지 확인
 **/

function solution(str) {
  let answer = "true";
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) return "no";
      stack.pop();
    }
  }
  if (stack.length > 0) return "no";
  return answer;
}

const str = "(()(()))(()";

console.log(solution(str));
