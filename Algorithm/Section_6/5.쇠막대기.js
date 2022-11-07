/**
 * ABOUT
 *
 * DATE: 2022-11-07
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 잘려진 쇠막대기 조각 개수 구하기
 **/

function solution(s) {
  let answer;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer++;
      }
    }
  }

  return answer;
}

const str = "()(((()())(())()))(())";

console.log(solution(str));
