/**
 * ABOUT
 *
 * DATE: 2022-01-01
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12943
 *
 * COMMENT:
 * 주어진 수가 1이 될때까지 반복(짝수면 2로, 홀수면 3 곱하고 +1)
 **/

function solution(num) {
  let i = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    i++;
    if (i === 500) return -1;
  }
  return i;
}
