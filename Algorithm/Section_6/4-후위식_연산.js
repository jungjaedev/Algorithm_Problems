/**
 * ABOUT
 *
 * DATE: 2022-11-05
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 후위연산
 **/

function solution(str) {
  let answer;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      stack.push(parseInt(str[i]));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (str[i] === "+") {
        stack.push(lt + rt);
      } else if (str[i] === "-") {
        stack.push(lt - rt);
      } else if (str[i] === "*") {
        stack.push(lt * rt);
      } else if (str[i] === "/") {
        stack.push(lt / rt);
      }
    }
  }
  answer = stack[0];
  return answer;
}

const str = "352+*9-";

console.log(solution(str));
