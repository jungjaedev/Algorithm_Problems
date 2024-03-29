/**
 * ABOUT
 *
 * DATE: 2022-11-06
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 인형뽑기(스택)
 **/

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((val) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][val - 1] !== 0) {
        let tmp = board[i][val - 1];
        board[i][val - 1] = 0;
        if (stack[stack.length - 1] === tmp) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
        break;
      }
    }
  });
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
