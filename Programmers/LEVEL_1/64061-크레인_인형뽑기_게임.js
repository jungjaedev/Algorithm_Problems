/**
 * ABOUT
 *
 * DATE: 2021-12-28
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/64061
 *
 * COMMENT:
 * stack에 하나씩 쌓아서 같은값이 두번들어가면 삭제후 +2 카운트
 **/

function solution(board, moves) {
  var answer = 0;
  let stack = [];
  moves.forEach(pos => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  return answer;
}
