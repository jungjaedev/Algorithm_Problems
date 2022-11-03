/**
 * ABOUT
 *
 * DATE: 2022-11-03
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 괄호안에 존재하는 문자 제거하고 남은 문자 출력
 **/

function solution(str) {
  let answer = "";
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      while (stack.pop() !== "(") {}
    } else {
      stack.push(str[i]);
    }
  }
  answer = stack.join("");
  return answer;
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

console.log(solution(str));
