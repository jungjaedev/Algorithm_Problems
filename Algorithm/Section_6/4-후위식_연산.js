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
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

const str = "352+*9-";

console.log(solution(str));
