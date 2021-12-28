/**
 * ABOUT
 *
 * DATE: 2021-12-28
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12916
 *
 * COMMENT:
 * 'p','y'의 개수가 같으면 true 아니면 false
 **/

function solution(s) {
  var answer = true;
  let cnt_p = 0;
  let cnt_y = 0;

  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'p') cnt_p++;
    else if (str[i] === 'y') cnt_y++;
  }

  if (cnt_p !== cnt_y) answer = false;

  return answer;
}
